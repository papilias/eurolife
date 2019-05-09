using Sitecore.Data.Items;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Wedia.Feature.Navigation.Models
{
    public class NavigationItem
    {
        public Item Item { get; set; }
        public string Url { get; set; }
        public bool IsActive { get; set; }
    }
}