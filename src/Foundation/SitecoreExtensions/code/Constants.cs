using Sitecore.Data;

namespace Wedia.Foundation.SitecoreExtensions
{
  public struct Constants
  {
    public struct DynamicPlaceholdersLayoutParameters
    {
      public static string UseStaticPlaceholderNames => "UseStaticPlaceholderNames";
    }

    public struct BucketResolver
    {
      public struct Blog
      {
        public const string BlogPath = "/blog/articles";
      }
      public struct BlogPost
      {         
        public static readonly ID TemplateID = new ID("{67F40FEF-B3C7-4366-B026-183E80DCF4E6}");
      }
    
    }
  }
}