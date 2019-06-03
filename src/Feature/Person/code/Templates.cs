using Sitecore.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Wedia.Feature.Person
{
    public struct Templates
    {
        public struct Person
        {
            public static readonly ID ID = new ID("{E876D234-83DB-4B57-BE87-365D9576377A}");

            public struct Fields
            {
                public static readonly ID Title = new ID("{902AD41A-7A0A-43FC-9080-0A858D455597}");
                public const string Title_FieldName = "PersonTitle";
                public static readonly ID Position = new ID("{E57A5FEE-E68D-4D37-AC1F-EDC51E551121}");
                public const string Position_FieldName = "PersonPosition";
                public static readonly ID DesktopImage = new ID("{A212C93A-7C83-4FED-BC5A-5B035BAEFF50}");
                public const string DesktopImage_FieldName = "PersonDesktopImage";
                public static readonly ID MobileImage = new ID("{D1A816F7-BF40-40AD-A0DB-D26C6A69DC38}");
                public const string MobileImage_FieldName = "PersonMobileImage";
                public static readonly ID Body = new ID("{3A28C78D-3C5E-4D7B-837B-9F511FB70D80}");
                public const string Body_FieldName = "PersonBody";
            }
        }
    }
}