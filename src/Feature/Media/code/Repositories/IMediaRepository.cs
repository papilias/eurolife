using System.Collections.Generic;
using Sitecore;
using Sitecore.Data;
using Sitecore.Data.Items;
using Wedia.Feature.Media.Models;

namespace Wedia.Feature.Media.Repositories
{
  public interface IMediaRepository
  {
    PDFGroups GetPDFGroupedList([NotNull] Item item, PagingSettings pagingSettings);
    PDFGroup GetNextPage(PagingSettings pagingSettings, int page);
  }
}
