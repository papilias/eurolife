using Sitecore.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Wedia.Feature.Highlight
{
    public struct Templates
    {
        public struct Icon
        {
            public static readonly ID ID = new ID("{7FD34A8D-CD3E-4720-9D5A-1DF02A5E12CE}");

            public struct Fields
            {
                public static readonly ID CssClass = new ID("{7C0C7238-1F7C-43E6-8C16-D076F5DCDE11}");
            }
        }

        public struct Highlight
        {
            public static readonly ID ID = new ID("{9E2BE5B5-5196-44A7-A85D-D7E137125987}");

            public struct Fields
            {
                public static readonly ID Title = new ID("{5BC5032C-22D2-4B23-B3BD-9A490AB20223}");
                public static readonly ID Icon = new ID("{0ABE85D3-2BB8-4D0A-BAD0-B45EB599BC7E}");
                public static readonly ID Summary = new ID("{7CD45D99-885C-4EF4-AE14-2AB581AE9C74}");
            }
        }

        public struct HasHighlights
        {
            public static readonly ID ID = new ID("{CDF57686-EE85-435E-8F0B-BEBAC61CCECE}");

            public struct Fields
            {
                public static readonly ID Title = new ID("{6D2EA3AA-419B-4147-A991-D7B44C07AF83}");
                public static readonly ID Summary = new ID("{095005BF-8EB5-4EC8-ABE8-EC8D3CE32100}");
                public static readonly ID Highlights = new ID("{1D27E9B7-91D4-4A39-ADCD-F103CB5EBEDE}");
            }
        }
    }
}