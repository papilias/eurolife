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
    }
}