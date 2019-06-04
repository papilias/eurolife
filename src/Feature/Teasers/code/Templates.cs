using Sitecore.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Wedia.Feature.Teasers
{
    public struct Templates
    {
        public struct DynamicTeaser
        {
            public static readonly ID ID = new ID("{6D4C5623-46BE-4226-95E1-AAF56A304537}");

            public struct Fields
            {
                public static readonly ID Title = new ID("{8916FA5F-C81E-498B-B38C-78EF0EF2B199}");
                public static readonly ID Active = new ID("{2B28DCCA-4258-4F5D-A795-B475333909CB}");
                public static readonly ID Count = new ID("{C1B4B643-02C7-4362-B316-465478198FF6}");
            }
        }

        public struct TeaserHeadline
        {
            public static readonly ID ID = new ID("{248FD29E-E583-4A75-8CEB-0A8508D82EBC}");

            public struct Fields
            {
                public static readonly ID Title = new ID("{1C2F6EBB-7EB9-47F8-AF61-57F1174108FE}");
            }
        }

        public struct TeaserContent
        {
            public static readonly ID ID = new ID("{94FCF2F1-3CCA-4D44-87FC-4400397C7AAE}");

            public struct Fields
            {
                public static readonly ID Summary = new ID("{EA49649B-F119-4F2D-BCEF-7FF4EDCBB109}");
                public static readonly ID DesktopImage = new ID("{CFC640DB-B9E4-41D6-ABCD-5050D6B6D6FE}");
                public static readonly ID MobileImage = new ID("{9245807D-C1E8-4987-AB3E-3ABC0AC05229}");
                public static readonly ID Content = new ID("{4C371D3E-7CB4-48FB-86E9-745CC92B1F92}");
                public static readonly ID Link = new ID("{F749E224-0A8C-4448-9B12-F4451CAA7E09}");
                public static readonly ID Label = new ID("{12F214C9-16EE-4CF1-9220-7D1C8FEFC9A1}");
            }  

            public struct Dimensions
            {                  
                public static readonly int ColoredImageWidth = 720;
                public static readonly int ColoredImageHeight = 520;
            }
        }
    }
}