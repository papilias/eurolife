using System;
using System.Collections.Generic;
using System.Linq;
using Wedia.Foundation.DependencyInjection;
using Wedia.Foundation.Indexing.Repositories;
using Sitecore.Data.Items;
using Wedia.Foundation.Indexing.Models;
using Wedia.Foundation.SitecoreExtensions.Extensions;
using Sitecore.Data;

namespace Wedia.Feature.Blog.Repositories
{
  [Service(typeof(IBlogRepository))]
  public class BlogRepository : IBlogRepository
  {
    public ISearchServiceRepository _searchServiceRepository;

    public BlogRepository(ISearchServiceRepository searchServiceRepository)
    {
      _searchServiceRepository = searchServiceRepository;
    }

    public IEnumerable<Item> GetArticlesForSpecificYear(Item contextItem, string year)
    {
        var data = Get(contextItem, Templates.BlogPost.ID, "sortorder", year);

        return data;
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