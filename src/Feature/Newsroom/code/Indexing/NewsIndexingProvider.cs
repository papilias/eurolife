using System;
using System.Collections.Generic;
using System.Configuration.Provider;
using System.Linq;
using System.Web;
using Wedia.Foundation.Dictionary.Models;
using Wedia.Foundation.Dictionary.Repositories;
using Wedia.Foundation.Indexing.Models;
using Sitecore.Data;
using Sitecore.ContentSearch.SearchTypes;
using Sitecore.Web.UI.WebControls;
using System.Linq.Expressions;

namespace Wedia.Feature.Newsroom.Indexing
{
  public class NewsIndexingProvider : ProviderBase, ISearchResultFormatter, IQueryPredicateProvider
  {
    public string ContentType => DictionaryPhraseRepository.Current.Get("/News/Search/Content Type", "News");

    public IEnumerable<ID> SupportedTemplates => throw new NotImplementedException();

    public void FormatResult(SearchResultItem item, ISearchResult formattedResult)
    {
      var contentItem = item.GetItem();

      if (contentItem == null)
      {
        return;
      }

      //formattedResult.Title = FieldRenderer.Render(contentItem, Templates);

    }

    public Expression<Func<SearchResultItem, bool>> GetQueryPredicate(IQuery query)
    {
      //var fieldNames = new[] { };
      throw new NotImplementedException();
    }
  }
}