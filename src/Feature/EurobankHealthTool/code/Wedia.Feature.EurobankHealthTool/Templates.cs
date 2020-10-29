using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sitecore.Data;

namespace Wedia.Feature.EurobankHealthTool
{
  public class Templates
  {
    public struct EurobankArticle
    {
      public static readonly ID ID = new ID("{853088F4-1362-4961-996A-3EE7B1A1F594}");
    }

    public struct EurobankCategory
    {
      public static readonly ID ID = new ID("{1FB605BC-5576-4564-BFDD-D219EE87AAEF}");
    }

    public struct EurobankLanding
    {
      public static readonly ID ID = new ID("{1EE7CE8B-B22F-4658-9B86-99BEC81A7BE7}");
    }

    public struct EBArticleContent
    {
      public static readonly ID ID = new ID("{C6824E42-A120-446C-AC81-D39C1EC4B85F}");

      public struct Fields
      {
        public static readonly ID Title = new ID("{C418852F-1DC2-4AFB-A4F5-2C70735C8065}");
        
        public static readonly ID Teaser = new ID("{93D8811C-00AE-43FB-9D2F-8CC5A3540EB2}");
        public const string Teaser_FieldName = "Teaser";
        public static readonly ID MainContent = new ID("{63D9AEBB-7D4C-43EB-A3EE-ADC96DF941D8}");             
        public static readonly ID Image = new ID("{F06F4366-95E6-40AC-BF47-09F13AA071E3}");
      }
    }

  }
}