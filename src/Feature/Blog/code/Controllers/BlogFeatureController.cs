using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Wedia.Feature.Blog.Repositories;
using Sitecore.Mvc.Presentation;

namespace Wedia.Feature.Blog.Controllers
{
  public class BlogFeatureController : Controller
  {
    private readonly IBlogRepository _blogRepository;

    public BlogFeatureController(IBlogRepository blogRepository)
    {
      this._blogRepository = blogRepository;
    }      

    public ActionResult MigrationData(string year = "")
    {
      if(!string.IsNullOrEmpty(year))
      {
        var item = RenderingContext.Current.Rendering.Item;
        //Sitecore.Data.Database master = Sitecore.Configuration.Factory.GetDatabase("master");
        //string mediaPath = $"/sitecore/media library/Project/Eurolife/Blog/{year}";
        //Sitecore.Data.Items.Item articlesList = Sitecore.Context.Database.GetItem(new Sitecore.Data.ID("{57ABE6E8-9793-4FC0-85FB-10364B59DC05}"));

        var data = _blogRepository.GetArticlesForSpecificYear(item, year);

        if(data != null && data.Any())
        {
          foreach(var article in data)
          {

          }
        }
        //get specific year under list
        //foreach (Sitecore.Data.Items.Item item in articlesList.Children.Where(x => x.TemplateID == Templates.BlogPost.ID))
        //{
        //  var name = item.Name;
        //}

      }

      return Content("OK");
    }



    private void CreateImages()
    {

    }

  }
}