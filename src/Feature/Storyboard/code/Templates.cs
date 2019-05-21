using Sitecore.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Wedia.Feature.Storyboard
{
    public struct Templates
    {
        public struct StoryboardItem
        {
            public static ID ID = new ID("{90C1A7CB-B558-45B5-9EBB-6D71E98AA597}"); 

            public struct Fields
            {
                public static ID Image = new ID("{CA468A9D-B4BC-4C66-B9B2-A3B7DB1793A5}");
                public const string Image_FieldName = "StoryboardItemImage";
                public static ID Content = new ID("{EA2D1D4E-972A-434C-B449-6329F2E7C3AA}");
                public const string Content_FieldName = "StoryboardItemContent";
                public static ID Year = new ID("{D13F4DD5-C2D2-4B66-87FA-C467BB5D9ACA}");
                public const string Year_FieldName = "StoryboardItemYear";
            }
        }

        public struct StoryboardItemsFolder
        {
            public static ID ID = new ID("{5EDB2E6F-EF6A-466C-8481-4A54595ABAE6}");
        }
    }
}