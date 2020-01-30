using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Wedia.Feature.Blog.Repositories;
using Sitecore.Mvc.Presentation;
using Sitecore.Data.Items;
using Sitecore.Data.Fields;
using Wedia.Foundation.SitecoreExtensions.Extensions;
using Wedia.Feature.Blog.Models;

namespace Wedia.Feature.Blog.Controllers
{
  public class BlogController : Controller
  {
    private readonly IBlogRepository _blogRepository;

    public BlogController(IBlogRepository blogRepository)
    {
      this._blogRepository = blogRepository;
    }      


    public ActionResult LifeStages()
    {
      var item = RenderingContext.Current.Rendering.Item; 
      return View("LifeStages", item.Children);
    }


    public ActionResult LatestArticles()
    {  
      var item = RenderingContext.Current.Rendering.Item;
      var count = RenderingContext.Current.Rendering.GetIntegerParameter("count", Contants.LatestNews.NumberOfArticles);

      return View("LatestArticles", _blogRepository.GetLatest(item, count));
    }

    //load articles list for specific category (product or life stage)
    public ActionResult ArticlesList()
    {
      var item = RenderingContext.Current.Rendering.Item;
      var includedFields = new Dictionary<string, string>();
      bool showTags = false; 

      if (item.TemplateID == Templates.Product.ID)
      {
        showTags = true;
        includedFields.Add(Templates.HasProducts.Fields.SelectedProducts_FieldName,
          item.ID.ToString().ToLower().Replace("-", "").TrimStart('{').TrimEnd('}'));
      }
      else if(item.TemplateID == Templates.LifeStage.ID)
      {
        showTags = false;
        includedFields.Add(Templates.HasLifeStages.Fields.SelectedLifeStages_FieldName,
          item.ID.ToString().ToLower().Replace("-", "").TrimStart('{').TrimEnd('}'));
      }

      var pagingSettings = new PagingSettings
      {
        ShowTags = showTags,
        CurrentPage = 0,
        OrderBy = Templates.HasBlogContent.Fields.Publicationdate_FieldName,
        IncludedFields = includedFields
      };
      var data = GetPagedResults(item, pagingSettings);

      return View("ArticlesList", data);
    }

    [HttpGet]
    public ActionResult AjaxPagedList()
    {
      return Content("");
    }

    private ArticlesList GetPagedResults(Item item, PagingSettings pagingSettings)
    {
      var results = _blogRepository.GetPagedList(item, pagingSettings);
      return results;
    }

    //public ActionResult RelatedArticles()
    //{
    //  return Content("");
    //}

    //public ActionResult ProductArticles()
    //{
    //  return Content("");
    //}

    //public ActionResult LifeStageArticles()
    //{
    //  return Content("");
    //}


    public ActionResult MigrationData(string year = "")
    {
#if DEBUG
      List<string> errors = new List<string>();    

      if (!string.IsNullOrEmpty(year))
      {
        var page = RenderingContext.Current.Rendering.Item;         

        var data = _blogRepository.GetArticlesForSpecificYear(page, year);
        Sitecore.Data.Database master = Sitecore.Configuration.Factory.GetDatabase("master");
        string mediaPath = $"/sitecore/media library/Project/Eurolife/Blog/{year}"; 

        if (data != null && data.Any())
        {
          foreach(var item in data)
          {
            if(item.Fields["OldImage"].HasValue)
            {                
              string tmpImage = item.Fields["OldImage"].ToString().Split('/').Last();
              string imgRaw = item.Fields["Image Raw HTML"].ToString();
              if (imgRaw.Contains($"{tmpImage}.png"))
                tmpImage = $"{tmpImage}.png";
              else if (imgRaw.Contains($"{tmpImage}.jpg"))
                tmpImage = $"{tmpImage}.jpg";
              else if (imgRaw.Contains($"{tmpImage}.jpeg"))
                tmpImage = $"{tmpImage}.jpeg";
              else if (imgRaw.Contains($"{tmpImage}.gif"))
                tmpImage = $"{tmpImage}.gif";

              string sourcePath = Url.Content(string.Format("{0}/{1}", System.Web.HttpContext.Current.Server.MapPath("~/asm"), System.IO.Path.GetFileName(tmpImage)));

              try
              {

                string proposedName = ItemUtil.ProposeValidItemName(item.Fields["OldImage"].ToString().Split('/').Last());
                Item myItem = master.GetItem(mediaPath + "/" + proposedName);

                if (myItem == null)
                {                     

                  if (!System.IO.File.Exists(sourcePath))
                  {
                    continue;
                  }

                  if (!string.IsNullOrEmpty(sourcePath))
                  {
                    Sitecore.Resources.Media.MediaCreatorOptions options = new Sitecore.Resources.Media.MediaCreatorOptions
                    {
                      // Store the file in the database, not as a file
                      FileBased = false,
                      // Remove file extension from item name
                      IncludeExtensionInItemName = false,
                      // Do not make a versioned template
                      Versioned = false,
                      // set the path
                      Destination = mediaPath
                    };
                    options.Destination = options.Destination + "/" + proposedName;
                    // Set the database
                    options.Database = Sitecore.Configuration.Factory.GetDatabase("master");
                    options.Language = Sitecore.Data.Managers.LanguageManager.GetLanguage("el-GR");

                    // Now create the file
                    Sitecore.Resources.Media.MediaCreator creator = new Sitecore.Resources.Media.MediaCreator();
                    MediaItem mediaItem = creator.CreateFromFile(sourcePath, options);

                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                      item.Editing.BeginEdit();

                      var imageField = (ImageField)item.Fields["Image"];
                      imageField.MediaID = mediaItem.ID;

                      item.Editing.EndEdit();
                    }   
                  }
                }
                else
                {
                  using (new Sitecore.SecurityModel.SecurityDisabler())
                  {
                    item.Editing.BeginEdit();

                    var imageField = (ImageField)item.Fields["Image"];
                    imageField.MediaID = myItem.ID;

                    item.Editing.EndEdit();
                  }
                }
              }
              catch (Exception ex)
              {
                errors.Add(item.Name);
              }

            }
          }
        }         

      }

      return Content(String.Join(", ", errors.ToArray()));
#endif

      return Content("OK");
    }
                   

  }
}