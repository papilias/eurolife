using Sitecore.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Wedia.Feature.Blog
{
  public struct Templates
  {
    public struct BlogPost
    {
        public static readonly ID ID = new ID("{67F40FEF-B3C7-4366-B026-183E80DCF4E6}");
    }

    public struct HasBlogContent
    {
      public static readonly ID ID = new ID("{6976D16D-9044-4615-8C3C-4ED3BF7E60A4}");

      public struct Fields
      {
        public static readonly ID Title = new ID("{ABB06B40-3BDA-4795-9E3F-C3203DA27637}");
        public const string Title_FieldName = "Title";
        public static readonly ID Teaser = new ID("{9FB7209F-E455-4463-91BA-1216D326DBFC}");
        public const string Teaser_FieldName = "Teaser";
        public static readonly ID MainContent = new ID("{751CC2E2-F3D2-4896-94B5-ED8174395942}");
        public static readonly ID ContentPart2 = new ID("{4BC3D402-8171-461A-B87D-BBB56E3431D8}");
        public static readonly ID Publicationdate = new ID("{DC21DBB1-629E-4C7C-8260-2048C1DE036F}");
        public const string Publicationdate_FieldName = "Publicationdate";
        public static readonly ID Image = new ID("{A766D447-508E-4FEC-9033-F00E30361EDC}");  
      }

    }



  }
}