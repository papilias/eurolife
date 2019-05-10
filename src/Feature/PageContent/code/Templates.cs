using Sitecore.Data;

namespace Wedia.Feature.PageContent
{
    public struct Templates
    {
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
                public static readonly ID Body = new ID("{13EF1BFF-97DC-4156-854F-B9E5C29E1254}");
                public const string Body_FieldName = "Body";
            }
        }
    }
}