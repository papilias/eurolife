using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sitecore.Data.Items;
using Wedia.Foundation.Indexing.Models;

namespace Wedia.Feature.Media.Models
{
  public class PDFGroup
  {
    public Item Item { get; set; }
    public PDFGroups SubGroups { get; set; }
    public ISearchResults PDFs { get; set; }
    public int Page { get; set; }
    public bool IsActive { get; set; }
    public int TotalResults { get; set; }

    public int ResultsOnPage { get; set; }

    public virtual int TotalPagesCount
    {
      get
      {
        var pageCount = this.TotalResults / this.ResultsOnPage;
        if (this.TotalResults % this.ResultsOnPage > 0)
        {
          pageCount++;
        }

        return pageCount;
      }
    }
  }
}