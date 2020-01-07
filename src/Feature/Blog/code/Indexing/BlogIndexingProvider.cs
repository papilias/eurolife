using System;
using System.Collections.Generic;
using System.Configuration.Provider;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using Sitecore.ContentSearch.SearchTypes;
using Sitecore.Data;
using Wedia.Foundation.Dictionary.Repositories;
using Wedia.Foundation.Indexing.Infrastructure;
using Wedia.Foundation.Indexing.Models;

namespace Wedia.Feature.Blog.Indexing
{
  public class BlogIndexingProvider : ProviderBase, ISearchResultFormatter, IQueryPredicateProvider
  {
    public string ContentType => DictionaryPhraseRepository.Current.Get("/Blog/Search/Content Type", "Blog Post");

    public IEnumerable<ID> SupportedTemplates => new[] { Templates.BlogPost.ID };

    public void FormatResult(SearchResultItem item, ISearchResult formattedResult)
    {
      throw new NotImplementedException();
    }

    public Expression<Func<SearchResultItem, bool>> GetQueryPredicate(IQuery query)
    {
      var fieldNames = new[] {
        Templates.HasBlogContent.Fields.Title_FieldName,
        Templates.HasBlogContent.Fields.Teaser_FieldName,
        //Templates.HasBlogContent.Fields.Publicationdate_FieldName       
      };

      return GetFreeTextPredicateService.GetFreeTextPredicate(fieldNames, query);
    }
  }
}