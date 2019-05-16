using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Wedia.Foundation.DependencyInjection;
using Wedia.Foundation.Indexing.Repositories;
using Sitecore.Data.Items;
using Wedia.Foundation.Indexing.Models;
using Wedia.Feature.Person.Models;

namespace Wedia.Feature.Person.Repositories
{
    [Service(typeof(IPersonRepository))]
    public class PersonRepository : IPersonRepository
    {
        public ISearchServiceRepository SearchServiceRepository;

        public PersonRepository(ISearchServiceRepository searchServiceRepository)
        {
            SearchServiceRepository = searchServiceRepository;
        }

        public ResultsViewModel GetItemsPaged(Item contextItem, PagingSettings paggingSettings, int? page)
        {
            var pageNumber = GetPageNumber(page);

            var query = new PersonQuery
            {
                QueryText = "*",
                Page = pageNumber,
                NoOfResults = paggingSettings.ResultsOnPage
            };

            var searchService = SearchServiceRepository.Get(new SearchSettingsBase { Templates = new[] { Templates.Person.ID } });
            searchService.Settings.Root = contextItem;
            var results = searchService
                .Search(query);
            //.FindAll(GetSkippedItems(paggingSettings, pageNumber), paggingSettings.ResultsOnPage)
            //.Results
            //.Select(x => x.Item)
            //.Where(x => x != null);

            return new ResultsViewModel
            {
                Results = results,
                Page = pageNumber,
                ResultsOnPage = paggingSettings.ResultsOnPage,
                TotalResults = results.TotalNumberOfResults,
                VisiblePagesCount = paggingSettings.PagesToShow
            };
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