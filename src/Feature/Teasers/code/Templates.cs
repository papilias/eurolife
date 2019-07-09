using Sitecore.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Wedia.Feature.Teasers
{
  public struct Templates
  {
    public struct DynamicTeaser
    {
      public static readonly ID ID = new ID("{6D4C5623-46BE-4226-95E1-AAF56A304537}");

      public struct Fields
      {
        public static readonly ID Active = new ID("{2B28DCCA-4258-4F5D-A795-B475333909CB}");
        public static readonly ID Count = new ID("{C1B4B643-02C7-4362-B316-465478198FF6}");
      }
    }

    public struct HasTeaserHeadline
    {
      public static readonly ID ID = new ID("{248FD29E-E583-4A75-8CEB-0A8508D82EBC}");

      public struct Fields
      {
        public static readonly ID Title = new ID("{1C2F6EBB-7EB9-47F8-AF61-57F1174108FE}");
      }
    }

    public struct HasTeaserImage
    {
      public static readonly ID ID = new ID("{94FCF2F1-3CCA-4D44-87FC-4400397C7AAE}");

      public struct Fields
      {
        public static readonly ID Image = new ID("{CFC640DB-B9E4-41D6-ABCD-5050D6B6D6FE}");
      }
    }

    public struct HasTeaserSummary
    {
      public static readonly ID ID = new ID("{85BB73D4-978F-4B24-AFC4-243058868D0C}");
      public struct Fields
      {
        public static readonly ID Summary = new ID("{015650F6-49A4-401C-B484-B9410A78C8CA}");
      }
    }

    public struct HasTeaserCTA
    {
      public static readonly ID ID = new ID("{6E50FBEA-AF05-4901-8B4D-3308E1FF92C4}");

      public struct Fields
      {
        public static readonly ID CTA = new ID("{AF8B8E9D-3FE1-4BFF-9062-4A139D8F4975}");
      }
    }

    public struct HasTeaserLabel
    {
      public static readonly ID ID = new ID("{0A7BE377-3CD0-44CC-A191-224D9DBE25A0}");

      public struct Fields
      {
        public static readonly ID Label = new ID("{12F214C9-16EE-4CF1-9220-7D1C8FEFC9A1}");
      }
    }

    public struct HasTeaserDownloadButton
    {
      public static readonly ID ID = new ID("{289626EC-F1F0-4EB1-AF6F-01A29E5936B1}");

      public struct Fields
      {
        public static readonly ID CTA = new ID("{F51DD24C-64BE-4832-9F98-E03F9E84FA63}");
      }
    }
  }
}