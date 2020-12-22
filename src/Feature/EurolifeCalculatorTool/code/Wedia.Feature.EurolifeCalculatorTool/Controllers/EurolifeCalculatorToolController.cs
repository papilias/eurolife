using Sitecore;
using Sitecore.Data;
using Sitecore.Diagnostics;
using Sitecore.Mvc.Presentation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Wedia.Feature.EurolifeCalculatorTool.Models;
using Wedia.Feature.EurolifeCalculatorTool.Repositories;
using Wedia.Foundation.SitecoreExtensions.Services.Request;
using Wedia.Foundation.SitecoreExtensions.Utilities;

namespace Wedia.Feature.EurolifeCalculatorTool.Controllers
{
  public class EurolifeCalculatorToolController : Controller
  {
    protected readonly Dictionary<string, string> mappings;
    private readonly IEurolifeCalulatorToolRepository _eurolifeCalulatorToolRepository;
    private readonly IRequestService _requestService;

    public EurolifeCalculatorToolController(IEurolifeCalulatorToolRepository eurolifeCalulatorToolRepository,
      IRequestService requestService)
    {
      this._eurolifeCalulatorToolRepository = eurolifeCalulatorToolRepository;
      this._requestService = requestService;
      mappings = new Dictionary<string, string>();
      StepsViewMappings();
    }

    public ActionResult CalculatorToolPage()
    {
      try
      {
        var item = RenderingContext.Current.Rendering.Item;
        var availableTargetGroups = _eurolifeCalulatorToolRepository.GetAvailableTargetGroups(item);
        var viewModel = new CalculatorToolPageViewModel
        {
          RenderingItem = item,
          AvailableTargetGroups = availableTargetGroups
        };
        return View("CalculatorToolPage", viewModel);
      }
      catch (Exception ex)
      {
        Log.Error("CalculatorToolPage exception", ex, this);
        throw ex;
      }
    }

    [HttpPost]
    public ActionResult LoadNextStep(UserSelection userSelection)
    {
      try
      {
        var item = Context.Database.GetItem(new ID(userSelection.ItemId));
        var stepView = mappings[userSelection.Step];
        var availableFamilyMembers = _eurolifeCalulatorToolRepository.GetAvailableFamilyMembers(item, userSelection.TargetGroup.Key);
        var availableAmounts= _eurolifeCalulatorToolRepository.GetAvailableAmounts(item);
        var availableHospitalizations = _eurolifeCalulatorToolRepository.GetAvailableHospitalizations(item);

        var viewModel = new CalculatorToolPageViewModel
        {
          RenderingItem = item,
          AvailableFamilyMembers = availableFamilyMembers,
          AvailableAmounts = availableAmounts,
          AvailableHospitalizations = availableHospitalizations,
          UserSelection = userSelection
        };

        var partial = Utilities.RenderRazorViewToString(ControllerContext, 
          stepView,
          viewModel);
        return Json(partial, JsonRequestBehavior.AllowGet);
      }
      catch (Exception ex)
      {
        Log.Error("LoadNextStep exception", ex, this);
        throw ex;
      }
    }

    public async Task<ActionResult> GetProducts(UserSelection userSelection)
    {
      try
      {
        //var item = Context.Database.GetItem(new ID(userSelection.ItemId));
        //var stepView = mappings[userSelection.Step];      

        //var viewModel = new CalculatorToolPageViewModel
        //{
        //  RenderingItem = item,         
        //  UserSelection = userSelection
        //};

        //var partial = Utilities.RenderRazorViewToString(ControllerContext,
        //  stepView,
        //  viewModel);

        var completeUrl = "https://esbtestna.eurolife.gr/LifeWebApi/api/HospitalApi/GetMainInsuredHealthCoversOptions";

        var jsondata = "{'Header':{'ServicesVersion':'1','CultureName':'GR','TimeDiff':null},'MainInsured':{'Lastname':null,'FirstName':null,'FatherName':null,'Age':40,'BirthDate':'1980-12-12','Profession':1000,'ProfessionCategory':1,'ProfessionDescription':'','MinBirthDate':null,'MaxBirthDate':null,'Sex':0,'Email':null,'Relationship':null,'Addresses':null,'Afm':null,'Adt':null,'Doy':0,'ID':0,'Amka':null,'Height':null,'Weight':null,'Mobile':null,'Nationality':null,'ADTCOUNTRY':null,'BRCOUNTRY':null,'ConsentSensitiveData':null,'consentsERB':null,'consentsThirdParty':null,'IsCustomer':true,'LegalPerson':false,'LegalType':0,'LegalRep':null,'DisplayedAge':null},'ProductCode':1,'CovCode':30276}";

        var model = Newtonsoft.Json.JsonConvert.DeserializeObject<Models.Api.MainInsuredHealthCovers>(jsondata);


        var result = await _requestService.PostAsync(completeUrl, model);


        return Json("OK", JsonRequestBehavior.AllowGet);
      }
      catch (Exception ex)
      {
        Log.Error("GetProducts exception", ex, this);
        throw ex;
      }
    }

    void StepsViewMappings()
    {
      mappings.Add("step-1", "~/Views/EurolifeCalculatorTool/Steps/Step1.cshtml");
      mappings.Add("step-2", "~/Views/EurolifeCalculatorTool/Steps/Step2.cshtml");
      mappings.Add("step-3", "~/Views/EurolifeCalculatorTool/Steps/Step3.cshtml");     
    }

  }
}