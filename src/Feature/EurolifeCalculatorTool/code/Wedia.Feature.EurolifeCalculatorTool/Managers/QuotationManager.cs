using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Wedia.Foundation.DependencyInjection;
using Wedia.Foundation.SitecoreExtensions.Services.Request;

namespace Wedia.Feature.EurolifeCalculatorTool.Managers
{
  [Service(typeof(IQuotationManager))]
  public class QuotationManager : IQuotationManager
  {
    private readonly IRequestService _requestService;
    private readonly static string GetQuotationPathName = "QuotationApi/GetQuotation";
    public QuotationManager(IRequestService requestService)
    {
      this._requestService = requestService;
    }

    public async Task<Models.Api.Quotation.Response.QuotationResponse> GetQuotation(Models.UserSelection userSelection, Models.Product product)
    {     
      var quotationRequest = new Models.Api.Quotation.Request.QuotationRequest();
      quotationRequest.Header = GetHeader();
      quotationRequest.Quotation = new Models.Api.Quotation.Request.Quotation 
      {
        BasicCover = GetBasicCover(product),
        Covers = GetCovers(product),//need to pass bundles
        Insured = GetInsured(userSelection.FamilyMembers),
        Customer = GetCustomer(userSelection.FamilyMembers),
        InsuredSameWithCustomer = true,
        Dependents = GetDependents(userSelection.FamilyMembers, product),
        FlowId = "0203-01-12e9e77f-8756-4a45-a53c-852538afe25d",
        Channel = 1
      };

      var uri = $"{Constants.LifeWebApiURL}{GetQuotationPathName}";

      var response = await _requestService.PostAsync<Models.Api.Quotation.Request.QuotationRequest, Models.Api.Quotation.Response.QuotationResponse>(uri, quotationRequest);

      return response;
    }

    private Models.Api.Common.Header GetHeader()
    {
      return new Models.Api.Common.Header
      {
        ServicesVersion = "1",
        CultureName = "GR"
      };
    }

    private Models.Api.Quotation.Request.BasicCover GetBasicCover(Models.Product product)
    {
      var basicCover = new Models.Api.Quotation.Request.BasicCover();

      if(!string.IsNullOrEmpty(product.AdditonalProductKey))
      {
        basicCover.CovCode = product.AdditonalProductKey;
        basicCover.CoverCapital = "3000";
      }

      return basicCover;
    }

    private List<Models.Api.Quotation.Request.Cover> GetCovers(Models.Product product)//aad bundles here
    {
      var covers = new List<Models.Api.Quotation.Request.Cover>();

      if(!string.IsNullOrEmpty(product.Key))
      {
        covers.Add(new Models.Api.Quotation.Request.Cover 
        {
          CovCode = product.Key,
          CoverCapital = "700000",
          IsSelected = true,
          IsDepend = true
        });
      }

      return covers;
    }

    private Models.Api.Quotation.Request.Customer GetInsured(IEnumerable<Models.FamilyMember> familyMembers)
    {
      var mainInsured = familyMembers.Count() > 1 ? familyMembers.Where(x => x.IsPrimaryInsured).FirstOrDefault() : familyMembers.FirstOrDefault();

      return new Models.Api.Quotation.Request.Customer
      {
        BirthDate = $"{mainInsured.BirthDate}-01-01",
        Profession = 1000,
        ProfessionCategory = 1,
        Sex = 0
      };
    }

    private Models.Api.Quotation.Request.Customer GetCustomer(IEnumerable<Models.FamilyMember> familyMembers)
    {
      var mainInsured = familyMembers.Count() > 1 ? familyMembers.Where(x => x.IsPrimaryInsured).FirstOrDefault() : familyMembers.FirstOrDefault();

      return new Models.Api.Quotation.Request.Customer
      {
        BirthDate = $"{mainInsured.BirthDate}-01-01",
        Profession = 1000,
        ProfessionCategory = 1       
      };
    }

    private List<Models.Api.Quotation.Request.Customer> GetDependents(IEnumerable<Models.FamilyMember> familyMembers, Models.Product product)//need bundles here
    {
      var dependents = new List<Models.Api.Quotation.Request.Customer>();

      if(familyMembers.Count() > 1)
      {
        foreach(var familyMember in familyMembers.Where(x => !x.IsPrimaryInsured))
        {
          dependents.Add(new Models.Api.Quotation.Request.Customer 
          {
            BirthDate = $"{familyMember.BirthDate}-01-01",
            Profession = 1000,
            ProfessionCategory = 1,
            Sex = 0,
            DependCovers = new List<Models.Api.Quotation.Request.Cover>
            {
              new Models.Api.Quotation.Request.Cover
              {
                CovCode = product.DependentMembersProductKey,
                IsSelected = true,
                IsDepend = true
              }
            }
          });
        }
      }

      return dependents;
    }
  }
}