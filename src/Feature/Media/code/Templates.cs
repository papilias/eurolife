using Sitecore.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Wedia.Feature.Media
{
    public struct Templates
    {
        public struct PDF
        {
            public static readonly ID ID = new ID("{87151256-44A4-48E2-92B9-E40A529C4540}");

            public struct Fields
            {
                public static readonly ID Title = new ID("{CF3C5C5E-4761-4C40-A7F3-9D4B41884D39}");
                public const string Title_FieldName = "PDFTitle";
                public static readonly ID File = new ID("{BF50C27A-312F-408D-A49B-2E34D6A1E715}");
                public const string File_FieldName = "PDFFile";
            }
        }

        public struct HasPDFs
        {
            public static readonly ID ID = new ID("{2598ADF9-8F12-4651-ABFB-435B1153A62A}");

            public struct Fields
            {
                public static readonly ID Files = new ID("{92184EE7-4EE4-466B-85BC-AD334BB2BEEE}");
                public const string Files_FieldName = "PDFFiles";
            }
        }
    }
}