using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sitecore.Data.Items;
using Wedia.Foundation.Indexing.Models;

namespace Wedia.Feature.Person.Models
{
    public class ResultsViewModel
    {
        public ISearchResults Results;
        public int Page { get; set; }
        public int TotalResults { get; set; }
        public int ResultsOnPage { get; set; }
        public int VisiblePagesCount { get; set; }
        public virtual int TotalPagesCount
        {
            get
            {
                var pageCount = TotalResults / ResultsOnPage;
              
                if (TotalResults % ResultsOnPage > 0)
                {
                    pageCount++;
                }

                return pageCount;
            }
        }

        public int FirstPage
        {
            get
            {
                var firstPage = Page - VisiblePagesCount / 2;
                while (firstPage + VisiblePagesCount > TotalPagesCount -1)
                {
                    firstPage--;
                }

                if (firstPage < 0)
                {
                    firstPage = 0;
                }

                return firstPage;
            }
        }

        public int LastPage
        {
            get
            {
                var lastPage = FirstPage + VisiblePagesCount;

                if (lastPage > TotalPagesCount - 1)
                {
                    lastPage = TotalPagesCount - 1;
                }

                return lastPage;
            }
        }
    }
}