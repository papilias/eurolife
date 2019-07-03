using Sitecore.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Wedia.Feature.Media
{
  public struct Templates
  {
    public struct HasMedia
    {
      public static readonly ID ID = new ID("{C0C03229-5BD7-4D32-82F3-A1A71D97F727}");

      public struct Fields
      {
        public static readonly ID Title = new ID("{8E77D56C-9AD2-4B70-BC1F-BEB99DE004E9}");
        public const string Title_FieldName = "MediaTitle";
        public static readonly ID Description = new ID("{20FAF759-601D-41E5-B2CE-CB23BE133C32}");
        public const string Description_FieldName = "MediaDescription";
        public static readonly ID Thumbnail = new ID("{DE984D10-9F28-4135-B53F-FE8B5DE19C55}");
        public const string Thumbnail_FieldName = "MediaThumbnail";
      }
    }

    public struct HasMediaSelector
    {
      public static readonly ID ID = new ID("{84FFE891-AF2B-4050-B119-8E8722443C91}");

      public struct Fields
      {
        public static readonly ID MediaSelector = new ID("{F10D132F-19E6-4524-B1AB-AEC4F2A4931C}");
      }
    }

    public struct HasMediaImage
    {
      public static readonly ID ID = new ID("{97AFB237-A504-4CEA-87EB-02B9F8934717}");

      public struct Fields
      {
        public static readonly ID Image = new ID("{193F78B8-6160-4346-92C3-2954CE7026DE}");
      }
    }

    public struct HasMediaVideo
    {
      public static readonly ID ID = new ID("{9D7CD402-28C2-4E3B-BD70-19371AD5B493}");

      public struct Fields
      {
        public static readonly ID VideoLink = new ID("{66DB8F07-EEB8-4B8B-9AA1-75146826CE42}");
      }
    }

    public struct HasMediaGroupTitle
    {
      public static readonly ID ID = new ID("{789A56EF-6898-4593-BF34-2EAD332CBB78}");

      public struct Fields
      {
        public static readonly ID Title = new ID("{FF6FC789-F1F2-495E-8A94-EFCBC528E1C6}");
      }
    }

    public struct MediaFile
    {
      public static readonly ID ID = new ID("{D0AA44DB-CEDF-4B29-AFF6-B43BBFA07F1C}");
    }

    public struct PDF
    {
      public static readonly ID ID = new ID("{87151256-44A4-48E2-92B9-E40A529C4540}");

      public struct Fields
      {
        public static readonly ID File = new ID("{BF50C27A-312F-408D-A49B-2E34D6A1E715}");
      }
    }

    public struct PDFGroup
    {
      public static readonly ID ID = new ID("{2598ADF9-8F12-4651-ABFB-435B1153A62A}");

      public struct Fields
      {
        public static readonly ID Files = new ID("{92184EE7-4EE4-466B-85BC-AD334BB2BEEE}");
      }
    }

    public struct PDFFileGroup
    {
      public static readonly ID ID = new ID("{20C44FDF-B209-41B2-8A41-4AE8DF883C64}");

      public struct Fields
      {
        public static readonly ID FileGroup = new ID("{F4543AEB-0454-4609-AFEC-D2AB0DD4FA11}");
      }
    }

  }
}