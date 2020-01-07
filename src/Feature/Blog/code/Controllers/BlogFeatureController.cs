using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Wedia.Feature.Blog.Controllers
{
  public class BlogFeatureController : Controller
  {  
    public ActionResult MigrationData(string year = "")
    {
      if(!string.IsNullOrEmpty(year))
      {
        Sitecore.Data.Database master = Sitecore.Configuration.Factory.GetDatabase("master");
        string mediaPath = $"/sitecore/media library/Project/Eurolife/Blog/{year}";
        Sitecore.Data.Items.Item articlesList = Sitecore.Context.Database.GetItem(new Sitecore.Data.ID("{57ABE6E8-9793-4FC0-85FB-10364B59DC05}"));

        //foreach (Sitecore.Data.Items.Item item in articlesList.Axes.)
        //{

        //}

      }

      return Content("OK");
    }



    private void CreateImages()
    {

    }

  }
}