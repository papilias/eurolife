using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Wedia.Foundation.DependencyInjection;
using Wedia.Foundation.Indexing.Repositories;
using Sitecore.Data.Items;
using Wedia.Foundation.Indexing.Models;
using Wedia.Feature.Person.Models;
using Wedia.Foundation.SitecoreExtensions.Extensions;

namespace Wedia.Feature.Person.Repositories
{
  [Service(typeof(IPersonRepository))]
  public class PersonRepository : IPersonRepository
  {
    public ISearchServiceRepository _searchServiceRepository;

    public PersonRepository(ISearchServiceRepository searchServiceRepository)
    {
      _searchServiceRepository = searchServiceRepository;
    }

    public IEnumerable<Item> Get(Item contextItem)
    {
      if (contextItem == null)
      {
        throw new ArgumentNullException(nameof(contextItem));
      }

      var searchService = _searchServiceRepository
        .Get(new SearchSettingsBase { Templates = new[] { Templates.Person.ID } });

      searchService.Settings.Root = contextItem;

      var results = searchService.FindAll();

      return results.Results.Select(x => x.Item).Where(x => x != null);
    }

    public IEnumerable<Item> GetCarousel(Item context)
    {
      return context.GetMultiListValueItems(Templates.PersonGroup.Fields.Persons)
        .Where(i => i.DescendsFrom(Templates.Person.ID));
    }

    private int GetPageNumber(int? page)
    {
      if (page == null)
        return 0;

      return page < 0 ? 0 : page.Value;
    }

    private int GetSkippedItems(PagingSettings pagingSettings, int page)
    {

      return pagingSettings.PagesToShow * page;
    }
  }
}