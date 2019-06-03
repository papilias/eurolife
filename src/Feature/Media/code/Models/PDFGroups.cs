using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sitecore.Data.Items;

namespace Wedia.Feature.Media.Models
{
    public class PDFGroups
    {
        public IEnumerable<PDFGroup> Groups { get; set; }
    }
}