using Sitecore.Data;

namespace Wedia.Feature.PageContent
{
  public struct Templates
  {

    public struct HasPageIconContent
    {
      public static readonly ID ID = new ID("{A5A87E16-7A80-47F8-AD2B-C27DCA24EB46}");

      public struct Fields
      {
        public static readonly ID Image = new ID("{23EF204D-DF36-447D-9E7D-8862C8B6455F}");
        public const string Image_FieldName = "Image";        
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

    public struct HasPageBodyContent
    {
      public static readonly ID ID = new ID("{A41837DB-BE80-49DD-9340-D1336CB1F17F}");

      public struct Fields
      {
        public static readonly ID Body = new ID("{5C95201B-69ED-40AE-ABDA-9EB83141D8E9}");
        public const string Body_FieldName = "Body";
      }
    }

    public struct HasPageInfoContent
    {
      public static readonly ID ID = new ID("{8511B505-DBBF-4FE1-9CD2-02B19AC125DC}");

      public struct Fields
      {
        public static readonly ID InfoContent = new ID("{BEC0DFB9-56A3-42B7-A619-E387F2C5B4B2}");
        public const string InfoContent_FieldName = "InfoContent";
      }
    }

    public struct HasPageCTA
    {
      public static readonly ID ID = new ID("{3E46454B-80FF-4B1C-AA72-B73CED6902BE}");

      public struct Fields
      {
        public static readonly ID CTA = new ID("{59B7D0BE-39F3-4F45-B645-BDE65FA07015}");
      }
    }
  }
}