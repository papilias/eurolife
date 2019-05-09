using Sitecore.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Wedia.Feature.Navigation
{
    public struct Templates
    {
        public struct Navigable
        {
            public static readonly ID ID = new ID("{672FFC13-EA1C-476F-8B06-2BFACE235A8F}");

            public struct Fields
            {
                public static readonly ID ShowInNavigation = new ID("{5585A30D-B115-4753-93CE-422C3455DEB2}");
                public static readonly ID NavigationTitle = new ID("{F8086E11-481D-46AA-B2E5-B0A6F142EF10}");
                public static readonly ID ShowChildren = new ID("{3B4322C4-9D93-498D-85CF-C29921147099}");
            }
        }
    }
}