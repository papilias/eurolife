using Sitecore;
using Sitecore.Data;
using Sitecore.Diagnostics;
using Sitecore.Mvc.Presentation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Wedia.Feature.EurolifeCalculatorTool.Models;
using Wedia.Foundation.SitecoreExtensions.Utilities;

namespace Wedia.Feature.EurolifeCalculatorTool.Controllers
{
  public class EurolifeCalculatorToolController : Controller
  {
    protected readonly Dictionary<string, string> mappings;


    public EurolifeCalculatorToolController()
    {
      mappings = new Dictionary<string, string>();
      StepsViewMappings();
    }


    public ActionResult CalculatorToolPage()
    {
      var item = RenderingContext.Current.Rendering.Item;     
      return View("CalculatorToolPage", item);
    }

    [HttpPost]
    public ActionResult LoadNextStep(UserSelection userSelection/*, string itemID, string step*/)
    {
      try
      {
        var item = Context.Database.GetItem(new ID(userSelection.ItemId));
        var stepView = mappings[userSelection.Step];
        var partial = Utilities.RenderRazorViewToString(ControllerContext, 
          stepView,
          new CalculatorToolPageViewModel { RenderingItem = item, UserSelection = userSelection });
        return Json(partial, JsonRequestBehavior.AllowGet);
      }
      catch (Exception ex)
      {
        Log.Error("LoadNextStep exception", ex, this);
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