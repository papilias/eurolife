using Sitecore.Data.Items;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Wedia.Feature.EurolifeCalculatorTool.Managers;
using Wedia.Feature.EurolifeCalculatorTool.Models;
using Wedia.Foundation.DependencyInjection;
using Wedia.Foundation.Dictionary.Repositories;
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
      var availableProducts = GetAvaialbleProducts(contextItem);

      var product = GetProductByUserSelection(contextItem, userSelection);

      var bundleCovers = GetAvailableBundleCovers(contextItem);

      var groupOfBundleCovers = GetAvailableGroupOfBundleCovers(contextItem);
     
      var amount = double.Parse(userSelection.Amount.Key);
      if (amount > 6000)
      {
        //remove from bundles code with 30292, when the amount is more than 6000
        if(bundleCovers.Select(x => x.Key == Constants.ExtraHospitalCareCode.ToString()).Any())
           bundleCovers.RemoveAll(x => x.Key == Constants.ExtraHospitalCareCode.ToString());

        //remove from group of bundles code with 17, when the amount is more than 6000
        if (groupOfBundleCovers.Select(x => x.Key == Constants.AccidentCare1Code.ToString()).Any())
          groupOfBundleCovers.RemoveAll(x => x.Key == Constants.AccidentCare1Code.ToString());
      }

      var quotationResponse = await _quotationManager.GetQuotation(userSelection, 
                                                                    product, 
                                                                    bundleCovers,
                                                                    groupOfBundleCovers);

      product.Price = GetProductPricing(quotationResponse, availableProducts);
      var groupOfBundles = GetViewModelBundlesWithPricing(quotationResponse, bundleCovers, groupOfBundleCovers);

      return new OfferViewModel 
      { 
        Product = product  ,
        GroupOfBundles = groupOfBundles
      };
    }

    private Product GetProductByUserSelection(Item contextItem, UserSelection userSelection)
    {
      var productsList = contextItem
                           .Children.Where(x => x.TemplateID == Templates.ProductsList.ID)
                           .FirstOrDefault() ?? throw new ArgumentNullException(nameof(contextItem));

      var availableProduct = productsList.Children.Where(x => x.TemplateID == Templates.Product.ID
        && x.Fields[Templates.HasProductContent.Fields.Amount].ToString() == userSelection.Amount.GuiId
        && x.Fields[Templates.HasProductContent.Fields.Hospitalization].ToString() == userSelection.Hospitalization.GuiId)
        .FirstOrDefault();//?? throw new ArgumentNullException(nameof(contextItem))

      var product = MappingProductEntityItem(availableProduct);
      product.InsuredPeople = userSelection.FamilyMembers.Select(x => new InsuredPerson { Title = x.Title, Image = x.Image });

      return product;
    }

    private List<Product> GetAvaialbleProducts(Item contextItem)
    {
      var availableProducts = new List<Product>();

      var productsList = contextItem
                           .Children.Where(x => x.TemplateID == Templates.ProductsList.ID)
                           .FirstOrDefault() ?? throw new ArgumentNullException(nameof(contextItem));

      foreach (var item in productsList.Children.Where(x => x.TemplateID == Templates.Product.ID))
        availableProducts.Add(MappingProductEntityItem(item));

      return availableProducts;
    }

    private List<GroupOfBundle> GetAvailableGroupOfBundleCovers(Item contextItem)
    {
      var groupOfBundles = new List<GroupOfBundle>();

      var bundlesList = contextItem
                           .Children.Where(x => x.TemplateID == Templates.BundlesList.ID)
                           .FirstOrDefault() ?? throw new ArgumentNullException(nameof(contextItem));

      var availableGroupOfBundles = bundlesList.Children.Where(x => x.TemplateID == Templates.BundleGroup.ID);

      if (availableGroupOfBundles != null && availableGroupOfBundles.Any())
      {
        foreach (var item in availableGroupOfBundles)
        {
          var groupOfBundle = new GroupOfBundle
          {
            Title = item.Fields[Templates.HasTitle.Fields.Title].ToString(),
            Key = item.Fields[Templates.HasKey.Fields.Key].ToString(),
            Bundles = new List<Bundle>()
          };

          var bundleCovers = item.Children.Where(x => x.TemplateID == Templates.Bundle.ID);

          foreach (var bundleCover in bundleCovers)
            groupOfBundle.Bundles.Add(MappingBundleEntityItem(bundleCover));

          groupOfBundles.Add(groupOfBundle);
        }
      }

      return groupOfBundles;
    }

    private List<Bundle> GetAvailableBundleCovers(Item contextItem)
    {
      var bundles = new List<Bundle>();

      var bundlesList = contextItem
                           .Children.Where(x => x.TemplateID == Templates.BundlesList.ID)
                           .FirstOrDefault() ?? throw new ArgumentNullException(nameof(contextItem));

      

      var availableBundles = bundlesList.Children.Where(x => x.TemplateID == Templates.Bundle.ID);
      foreach (var item in availableBundles)
        bundles.Add(MappingBundleEntityItem(item));

      return bundles;
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

    private List<GroupOfBundle> GetViewModelBundlesWithPricing(Models.Api.Quotation.Response.QuotationResponse quotationResponse,
     List<Bundle> bundleCovers,
     List<GroupOfBundle> groupOfBundlesCovers)
    {
      var viewModelGroupOfBundles = new List<GroupOfBundle>();
      var responseBundles = new List<Bundle>();

      if (quotationResponse.Quotation.Covers != null && quotationResponse.Quotation.Covers.Any())
      {
        foreach (var cover in quotationResponse.Quotation?.Covers)
        {
          if (bundleCovers.Where(x => x.Key == cover.CovCode.ToString()).Any())//is bundle
          {          
            var bundle = bundleCovers.Where(x => x.Key == cover.CovCode.ToString()).FirstOrDefault();
            responseBundles.Add(new Bundle
            {
              Price = new Price
              {
                CoverPremium = cover.CoverPremium,
                CoverPremium2 = cover.CoverPremium2,
                CoverPremium4 = cover.CoverPremium4,
                CoverPremium12 = cover.CoverPremium12
              },             
              Title = bundle.Title,
              Key = bundle.Key
            });
          }
        }
      }

      if (quotationResponse.Quotation.BundleCovers != null && quotationResponse.Quotation.BundleCovers.Any())
      {
        foreach(var group in quotationResponse.Quotation.BundleCovers)
        {
          var groupBundle = groupOfBundlesCovers.Where(x => x.Key == group.Code.ToString()).FirstOrDefault();
          responseBundles.Add(new Bundle
          {
            Price = new Price
            {
              CoverPremium = group.CoverPremium,
              CoverPremium2 = group.CoverPremium2,
              CoverPremium4 = group.CoverPremium4,
              CoverPremium12 = group.CoverPremium12
            },
            Title = groupBundle.Title,
            Key = groupBundle.Key
          });
        }
      }

      //create the custom desired group of bundles
      var basicBundle = GetBasicBundle(responseBundles);
      if (basicBundle != null)
        viewModelGroupOfBundles.Add(basicBundle);

      //create medium bundle 
      var mediumBundle = GetMediumBundle(responseBundles);
      if (mediumBundle != null)
        viewModelGroupOfBundles.Add(mediumBundle);

      //create full bundle 
      var fullBundle = GetFullBundle(responseBundles);
      if (fullBundle != null)
        viewModelGroupOfBundles.Add(fullBundle);

      return viewModelGroupOfBundles;
    }    

    private GroupOfBundle GetBasicBundle(List<Bundle> bundles)
    {
      if (bundles.Where(x => x.Key == Constants.ExtraHospitalCareCode.ToString()).Any())//we have amount <=6000
      {   
        return SetGroupOfBundle(bundles.Where(x => x.Key == Constants.ExtraHospitalCareCode.ToString()
          || x.Key == Constants.AccidentCare1Code.ToString()).ToList(),
          DictionaryPhraseRepository.Current.Get("/EurolifeCalculatorTool/Step4/GroupCovers/Basic", "Basic"));
      }
      else return null;
    }

    private GroupOfBundle GetMediumBundle(List<Bundle> bundles)
    {
      return SetGroupOfBundle(bundles.Where(x => x.Key == Constants.ExtraHospitalCareCode.ToString()
       || x.Key == Constants.AccidentCare1Code.ToString()
       || x.Key == Constants.SeriusInjuriesCode.ToString()).ToList(),
           DictionaryPhraseRepository.Current.Get("/EurolifeCalculatorTool/Step4/GroupCovers/Medium", "Medium"));
    }

    private GroupOfBundle GetFullBundle(List<Bundle> bundles)
    {
      return SetGroupOfBundle(bundles, DictionaryPhraseRepository.Current.Get("/EurolifeCalculatorTool/Step4/GroupCovers/Full", "Full"));
    }

    private GroupOfBundle SetGroupOfBundle(List<Bundle> bundles, string title)
    {
      return new GroupOfBundle
      {
         Title = title,
         Bundles = bundles,
         Price = new Price
         {
           CoverPremium = bundles.Sum(x => x.Price.CoverPremium),
           CoverPremium2 = bundles.Sum(x => x.Price.CoverPremium2),
           CoverPremium4 = bundles.Sum(x => x.Price.CoverPremium4),
           CoverPremium12 = bundles.Sum(x => x.Price.CoverPremium12),
         }
      };
    }

    private Bundle MappingBundleEntityItem(Item item)
    {
      return new Bundle
      {
        Title = item.Fields[Templates.HasTitle.Fields.Title].ToString(),
        Key = item.Fields[Templates.HasKey.Fields.Key].ToString(),
        CoverCapital = item.Fields[Templates.HasCoverCapital.Fields.CoverCapital].ToString()        
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