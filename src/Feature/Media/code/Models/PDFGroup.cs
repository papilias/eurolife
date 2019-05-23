using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sitecore.Data.Items;

namespace Wedia.Feature.Media.Models
{
    public class PDFGroup
    {
        public Item Item{ get; set; }
        public PDFGroups SubGroups { get; set; }
        public IEnumerable<Item> PDFs { get; set; }
        public bool IsActive { get; set; }
    }
}