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
    
    public struct LifeStage
    {
      public static readonly ID ID = new ID("{3D204D86-3DB9-4721-B8AD-D4AA7F0E6F6E}");
      public struct Fields
      {
      }
    }

    public struct Product
    {
      public static readonly ID ID = new ID("{70DBEA9E-F842-4F79-A111-DD9D803526EE}");

      public struct Fields
      {
      }
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

    public struct HasPageImageContent
    {
      public static readonly ID ID = new ID("{AE8B3FD1-CD52-49C5-9CFD-FDE8B7D58751}");

      public struct Fields
      {
        public static readonly ID DesktopImage = new ID("{B55592B1-8771-4BC3-A3A7-A30A2761430F}");
        public const string DesktopImage_FieldName = "DesktopImage";
        public static readonly ID MobileImage = new ID("{48C14F0A-157D-43E9-B294-261895506AE9}");
        public const string DesktopImage_MobileImage = "MobileImage";
      }
    }

    public struct HasPageContent
    {
      public static readonly ID ID = new ID("{68DC8ED7-3248-4897-B179-7516EA3ED3C3}");

      public struct Fields
      {
        public static readonly ID PreTitle = new ID("{1D7F5999-9735-4C52-9E08-47BD7DF3FB40}");
        public const string PreTitle_FieldName = "PreTitle";
        public static readonly ID Title = new ID("{48B984BE-446E-40C9-B86B-2B93F35F015E}");
        public const string Title_FieldName = "Title";
        public static readonly ID Summary = new ID("{9580E8D5-430E-4746-B4C1-6B71C56DF42E}");
        public const string Summary_FieldName = "Summary";
      }
    }

    public struct HasLifeStages
    {
      public static readonly ID ID = new ID("{B155D7C4-8330-4919-975E-674BA528B46D}");

      public struct Fields
      {
        public static readonly ID SelectedLifeStages = new ID("{DC55B7E8-4AEA-4E4F-82F3-4BEFD91D4375}");
      }
    }

    public struct HasProducts
    {
      public static readonly ID ID = new ID("{4B97E4C2-4C80-4C33-9357-5A5521C62296}");

      public struct Fields
      {
        public static readonly ID SelectedProducts = new ID("{710D9BE7-B5B4-4786-AF74-43FD2D763A3B}");
      }
    }
  }
}