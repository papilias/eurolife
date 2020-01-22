using System;
using System.Collections.Generic;
using System.Linq;
using Wedia.Foundation.DependencyInjection;
using Wedia.Foundation.Indexing.Repositories;
using Sitecore.Data.Items;
using Wedia.Foundation.Indexing.Models;
using Wedia.Foundation.SitecoreExtensions.Extensions;
using Sitecore.Data;
using Wedia.Foundation.SitecoreExtensions.Utilities;

namespace Wedia.Feature.Blog.Repositories
{
  [Service(typeof(IBlogRepository))]
  public class BlogRepository : IBlogRepository
  {
    private readonly SearchSettingsBase _searchBaseSettings;

    public ISearchServiceRepository _searchServiceRepository;

    public BlogRepository(ISearchServiceRepository searchServiceRepository)
    {
      _searchServiceRepository = searchServiceRepository;
      _searchBaseSettings = new SearchSettingsBase { Templates = new[] { Templates.BlogPost.ID } };
    }

    public IEnumerable<Item> GetArticlesForSpecificYear(Item contextItem, string year)
    {
        var data = Get(contextItem, Templates.BlogPost.ID, "sortorder", year);

        return data.Where(x => x.Fields[Templates.HasBlogContent.Fields.Publicationdate].ToString().Contains(year));
    }


    public IEnumerable<Models.BlogPostItem> GetLatest(Item contextItem, int count)
    {
      var items = Get(contextItem).OrderByDescending(i => i[Templates.HasBlogContent.Fields.Publicationdate]).Take(count);

      List<Models.BlogPostItem> data = new List<Models.BlogPostItem>();

      if(items != null && items.Any())
      {
        foreach(var item in items)
        {
          data.Add(MappingBlogPostItem(item, true));
        }
      }                                       

      return data;
    }


    private Models.BlogPostItem MappingBlogPostItem(Item item, bool showTags = false)
    {
      Models.BlogPostItem blogPostItem = new Models.BlogPostItem();

      var mediaUrlOptions = new Sitecore.Resources.Media.MediaUrlOptions
      {
        Width = 600,
        Height = 0
      };

      if (item != null)
      {
        blogPostItem.Title = item.Fields[Templates.HasBlogContent.Fields.Title].ToString();
        blogPostItem.URL = item.Url();
        blogPostItem.Summary = Utilities.StripHTML(item.Fields[Templates.HasBlogContent.Fields.Teaser].ToString());
        blogPostItem.Image = item.FieldHasValue(Templates.HasBlogContent.Fields.Image) 
          ? item.ImageUrl(Templates.HasBlogContent.Fields.Image, mediaUrlOptions) 
          : string.Empty;

        if (showTags && item.FieldHasValue(Templates.HasProducts.Fields.SelectedProducts))
        {
          var selectedProducts = item.GetMultiListValueItems(Templates.HasProducts.Fields.SelectedProducts);
          if(selectedProducts != null && selectedProducts.Any())
          {
            var tags = new List<Models.Tag>();

            foreach(var product in selectedProducts)
            {
              tags.Add(new Models.Tag { Title = product.Fields[Templates.HasPageContent.Fields.Title]?.ToString() });
            }

            blogPostItem.Tags = tags;
          }            
        } 
      }

      return blogPostItem;
    }

    private IEnumerable<Item> Get(Item contextItem)
    {
      var searchService = _searchServiceRepository
        .Get(_searchBaseSettings);

      searchService.Settings.Root = contextItem;

      var results = searchService.FindAll();

      return results.Results.Select(x => x.Item).Where(x => x != null);
    }


    private IEnumerable<Item> Get(Item contextItem, ID TemplateID, string orderby = "sortorder", string year = "")
    {
      if (contextItem == null)
      {
        throw new ArgumentNullException(nameof(contextItem));
      }

      var searchService = _searchServiceRepository
        .Get(new SearchSettingsBase { Templates = new[] { TemplateID } });

      searchService.Settings.Root = contextItem;

      var results = searchService.FindAll(0, 0, orderby);

      //if(!string.IsNullOrEmpty(year))
      //{
      //  return results.Results.Select(d => d.Item).Where(i => i != null
      //  && i.Field(Templates.HasBlogContent.Fields.Publicationdate).ToString().Contains(year)); // == int.Parse(year));
      //}

      return results.Results.Select(d => d.Item).Where(i => i != null);    
    }


   
  }
}