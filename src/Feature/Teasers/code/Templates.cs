namespace Wedia.Feature.Teasers
{
    using Sitecore.Data;
    public struct Templates
    {
        public struct TeaserContent
        {
            public static ID ID = new ID("{A1584F6E-EA1C-4F98-AA24-6A392437A714}");

            public struct Fields
            {
                public static readonly ID TeaserTitle = new ID("{22697FAE-543A-40FF-93FD-D2B5BDD41BEF}");
                public static readonly ID TeaserSummary = new ID("{A61AF388-A82E-4AC2-8BFA-35B77210957A}");
            }
        }

        public struct TeaserCTA
        {
            public static ID ID = new ID("{6E50FBEA-AF05-4901-8B4D-3308E1FF92C4}");

            public struct Fields
            {
                public static readonly ID TeaserCTA = new ID("{AF8B8E9D-3FE1-4BFF-9062-4A139D8F4975}");               
            }
        }

        public struct TeaserImage
        {
            public static ID ID = new ID("{94FCF2F1-3CCA-4D44-87FC-4400397C7AAE}");

            public struct Fields
            {
                public static readonly ID DesktopImage = new ID("{CFC640DB-B9E4-41D6-ABCD-5050D6B6D6FE}");
                public static readonly ID MobileImage = new ID("{9245807D-C1E8-4987-AB3E-3ABC0AC05229}");
            }
        }
    }
}