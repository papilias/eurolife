using Sitecore.Data.Items;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Wedia.Feature.EurolifeCalculatorTool.Managers;
using Wedia.Feature.EurolifeCalculatorTool.Models;
using Wedia.Foundation.DependencyInjection;
using Wedia.Foundation.SitecoreExtensions.Extensions;

namespace Wedia.Feature.EurolifeCalculatorTool.Repositories
{
  [Service(typeof(IEurolifeCalulatorToolRepository))]
  public class EurolifeCalulatorToolRepository : IEurolifeCalulatorToolRepository
  {
    Sitecore.Resources.Media.MediaUrlOptions _mediaUrlOptions;
    IQuotationManager _quotationManager;

    public EurolifeCalulatorToolRepository(IQuotationManager quotationManager)
    {
      this._quotationManager = quotationManager;
      _mediaUrlOptions = new Sitecore.Resources.Media.MediaUrlOptions
      {       
        AlwaysIncludeServerUrl = false
      };
    }    

    public IEnumerable<TargetGroup> GetAvailableTargetGroups(Item contextItem)
    {
      var targetGroupList = contextItem
                            .Children.Where(x => x.TemplateID == Templates.TargetGroupList.ID)
                            .FirstOrDefault() ?? throw new ArgumentNullException(nameof(contextItem));

      var targetGroupItems = targetGroupList
                             .Children.Where(x => x.TemplateID == Templates.TargetGroup.ID)
                             .ToList() ?? throw new ArgumentNullException(nameof(contextItem));

      var list = new List<TargetGroup>();

      foreach (var item in targetGroupItems)
        list.Add(MappingTargetGroupItem(item));

      return list;
    }

    public IEnumerable<FamilyMember> GetAvailableFamilyMembers(Item contextItem, string targetGroupKey)
    {
      var familyMembersList = contextItem
                            .Children.Where(x => x.TemplateID == Templates.FamilyMembersList.ID)
                            .FirstOrDefault() ?? throw new ArgumentNullException(nameof(contextItem));

      var familyMemberItems = familyMembersList
                             .Children.Where(x => x.TemplateID == Templates.FamilyMember.ID)
                             .ToList() ?? throw new ArgumentNullException(nameof(contextItem));

      var list = new List<FamilyMember>();

      foreach (var item in familyMemberItems)
        list.Add(MappingFamilyMemberItem(item));

      //filter list based on targetGroupKey
      if(targetGroupKey == Constants.Family_Target_Me)
      {
        list.RemoveAll(x => x.Key != Constants.Family_Member_Me);
      }

      if (targetGroupKey == Constants.Family_Target_Child)
      {
        list.RemoveAll(x => x.Key != Constants.Family_Member_Child);
      }

      if (targetGroupKey == Constants.Family_Target_Us)
      {
        list.RemoveAll(x => x.Key != Constants.Family_Member_Father 
                         && x.Key != Constants.Family_Member_Mother);
      }

      if (targetGroupKey == Constants.Family_Target_Family)
      {
        list.RemoveAll(x => x.Key != Constants.Family_Member_Father
                         && x.Key != Constants.Family_Member_Mother
                         && x.Key != Constants.Family_Member_Son
                         && x.Key != Constants.Family_Member_Daughter);
      }

      return list;
    }

    public IEnumerable<Amount> GetAvailableAmounts(Item contextItem)
    {
      var amountsList = contextItem
                            .Children.Where(x => x.TemplateID == Templates.AmountsList.ID)
                            .FirstOrDefault() ?? throw new ArgumentNullException(nameof(contextItem));

      var amountItems = amountsList
                             .Children.Where(x => x.TemplateID == Templates.Amount.ID)
                             .ToList() ?? throw new ArgumentNullException(nameof(contextItem));

      var list = new List<Amount>();

      foreach (var item in amountItems)
        list.Add(MappingAmountEntityItem(item));

      return list;
    }

    public IEnumerable<Hospitalization> GetAvailableHospitalizations(Item contextItem)
    {
      var hospitalizationList = contextItem
                            .Children.Where(x => x.TemplateID == Templates.HospitalizationList.ID)
                            .FirstOrDefault() ?? throw new ArgumentNullException(nameof(contextItem));

      var hospitalizationItems = hospitalizationList
                             .Children.Where(x => x.TemplateID == Templates.Hospitalization.ID)
                             .ToList() ?? throw new ArgumentNullException(nameof(contextItem));

      var list = new List<Hospitalization>();

      foreach (var item in hospitalizationItems)
        list.Add(MappingHospitalizationEntityItem(item));

      return list;
    }

    public async Task<OfferViewModel> GetProductAndBundles(Item contextItem, UserSelection userSelection)
    {
      var product = new Product();      

      var productsList = contextItem
                            .Children.Where(x => x.TemplateID == Templates.ProductsList.ID)
                            .FirstOrDefault() ?? throw new ArgumentNullException(nameof(contextItem));      

      var availableProduct = productsList.Children.Where(x => x.TemplateID == Templates.Product.ID
      && x.Fields[Templates.HasProductContent.Fields.Amount].ToString() == userSelection.Amount.GuiId
      && x.Fields[Templates.HasProductContent.Fields.Hospitalization].ToString() == userSelection.Hospitalization.GuiId)
      .FirstOrDefault() ?? throw new ArgumentNullException(nameof(contextItem));

      product = MappingProductEntityItem(availableProduct);
      product.InsuredPeople = userSelection.FamilyMembers.Select(x => new InsuredPerson { Title = x.Title, Image = x.Image });

      var bundlesList = contextItem
                            .Children.Where(x => x.TemplateID == Templates.BundlesList.ID)
                            .FirstOrDefault() ?? throw new ArgumentNullException(nameof(contextItem));

      var bundles = new List<Bundle>();

      var availableBundles = bundlesList.Children.Where(x => x.TemplateID == Templates.Bundle.ID);
      foreach (var item in availableBundles)
        bundles.Add(MappingBundleEntityItem(item));

      //remove from bundles code with 30292, when the amount is more than 6000
      var amount = double.Parse(userSelection.Amount.Key);
      if(amount > 6000 && bundles.Select(x => x.CovCode == "30292").Any())
      {
        bundles.RemoveAll(x => x.CovCode == "30292");
      }

      var quotationResponse = await _quotationManager.GetQuotation(userSelection, product, bundles);

      var availableProducts = new List<Product>();

      foreach (var item in productsList.Children.Where(x => x.TemplateID == Templates.Product.ID))
        availableProducts.Add(MappingProductEntityItem(item));

      product.Price = GetProductPricing(quotationResponse, availableProducts);

      return new OfferViewModel 
      { 
        Product = product        
      };
    }

    private Price GetProductPricing(Models.Api.Quotation.Response.QuotationResponse quotationResponse,
      List<Product> products)
    {
      var price = new Price
      {
        CoverPremium = quotationResponse.Quotation.BasicCover?.CoverPremium,
        CoverPremium2 = quotationResponse.Quotation.BasicCover?.CoverPremium2,
        CoverPremium4 = quotationResponse.Quotation.BasicCover?.CoverPremium4,
        CoverPremium12 = quotationResponse.Quotation.BasicCover?.CoverPremium12
      };

      if (quotationResponse.Quotation.Covers != null && quotationResponse.Quotation.Covers.Any())
      {
        foreach(var cover in quotationResponse.Quotation?.Covers)
        {
          if(products.Where(x=> x.Key == cover.CovCode.ToString()).Any())//is product
          {
            price.CoverPremium += cover.CoverPremium;
            price.CoverPremium2 += cover.CoverPremium2;
            price.CoverPremium4 += cover.CoverPremium4;
            price.CoverPremium12 += cover.CoverPremium12;
          }
        }
      }
      
      foreach (var dependent in quotationResponse.Quotation?.Dependents)
      {
        foreach(var dependentCover in dependent?.DependCovers)
        {
          if (products.Where(x => x.DependentMembersProductKey == dependentCover.CovCode.ToString()).Any())//is product for dependent member
          {
            price.CoverPremium += dependentCover.CoverPremium;
            price.CoverPremium2 += dependentCover.CoverPremium2;
            price.CoverPremium4 += dependentCover.CoverPremium4;
            price.CoverPremium12 += dependentCover.CoverPremium12;
          }
        }
      }  

      return price;
    }

    private List<GroupOfBundle> GetGroupOfBundles(Models.Api.Quotation.Response.QuotationResponse quotationResponse,
     List<Bundle> bundles)
    {
      var groupOfBundles = new List<GroupOfBundle>();

      if (quotationResponse.Quotation.Covers != null && quotationResponse.Quotation.Covers.Any())
      {
        foreach (var cover in quotationResponse.Quotation?.Covers)
        {
          if (bundles.Where(x => x.CovCode == cover.CovCode.ToString()).Any())//is bundle
          {
            //price.CoverPremium += cover.CoverPremium;
            //price.CoverPremium2 += cover.CoverPremium2;
            //price.CoverPremium4 += cover.CoverPremium4;
            //price.CoverPremium12 += cover.CoverPremium12;
          }
        }
      }



      //var price = new Price
      //{
      //  CoverPremium = quotationResponse.Quotation.BasicCover?.CoverPremium,
      //  CoverPremium2 = quotationResponse.Quotation.BasicCover?.CoverPremium2,
      //  CoverPremium4 = quotationResponse.Quotation.BasicCover?.CoverPremium4,
      //  CoverPremium12 = quotationResponse.Quotation.BasicCover?.CoverPremium12
      //};

    

 

      return groupOfBundles;
    }

    private Bundle MappingBundleEntityItem(Item item)
    {
      return new Bundle
      {
        Title = item.Fields[Templates.HasTitle.Fields.Title].ToString(),
        Key = item.Fields[Templates.HasKey.Fields.Key].ToString(),
        CoverCapital = item.Fields[Templates.HasCoverCapital.Fields.CoverCapital].ToString(),
        CovCode = item.Fields[Templates.HasCovCode.Fields.CovCode].ToString()
      };
    }

    private Product MappingProductEntityItem(Item item)
    {
      var amountField = item.Fields[Templates.HasProductContent.Fields.Amount];
      var amountItem = Sitecore.Context.Database.GetItem(amountField.Value);

      var hospitalizationField = item.Fields[Templates.HasProductContent.Fields.Hospitalization];
      var hospitalizationItem = Sitecore.Context.Database.GetItem(hospitalizationField.Value);

      return new Product
      {
        Title = item.Fields[Templates.HasTitle.Fields.Title].ToString(),
        Key = item.Fields[Templates.HasKey.Fields.Key].ToString(),
        RTE = item.Field(Templates.HasProductContent.Fields.RTE),
        Amount = amountItem.Fields[Templates.HasTitle.Fields.Title].ToString(),
        Hospitalization = hospitalizationItem.Fields[Templates.HasTitle.Fields.Title].ToString(),
        DependentMembersProductKey = item.Fields[Templates.HasProductContent.Fields.DependentMembersProductKey].ToString(),
        AdditonalProductKey = item.Fields[Templates.HasProductContent.Fields.AdditonalProductKey].ToString()
      };
    }

    private Amount MappingAmountEntityItem(Item item)
    {
      return new Amount
      {
        Title = item.Fields[Templates.HasTitle.Fields.Title].ToString(),
        Key = item.Fields[Templates.HasKey.Fields.Key].ToString(),
        GuiId = item.ID.ToString()
      };
    }

    private Hospitalization MappingHospitalizationEntityItem(Item item)
    {
      return new Hospitalization
      {
        Title = item.Fields[Templates.HasTitle.Fields.Title].ToString(),
        Key = item.Fields[Templates.HasKey.Fields.Key].ToString(),
        GuiId = item.ID.ToString()
      };
    }

    private TargetGroup MappingTargetGroupItem(Item item)
    {
      return new TargetGroup 
      {
        Title = item.Fields[Templates.HasTitle.Fields.Title].ToString(),
        Key = item.Fields[Templates.HasKey.Fields.Key].ToString(),
        Description = item.Fields[Templates.HasDescription.Fields.Description].ToString(),
        Image = item.FieldHasValue(Templates.HasImage.Fields.Image)
          ? item.ImageUrl(Templates.HasImage.Fields.Image, _mediaUrlOptions)
          : string.Empty
      };
    }

    private FamilyMember MappingFamilyMemberItem(Item item)
    {
      return new FamilyMember
      {
        Title = item.Fields[Templates.HasTitle.Fields.Title].ToString(),
        Key = item.Fields[Templates.HasKey.Fields.Key].ToString(),       
        Image = item.FieldHasValue(Templates.HasImage.Fields.Image)
          ? item.ImageUrl(Templates.HasImage.Fields.Image, _mediaUrlOptions)
          : string.Empty
      };
    }
  }
}