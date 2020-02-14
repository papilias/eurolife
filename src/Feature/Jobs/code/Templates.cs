using Sitecore.Data;

namespace Wedia.Feature.Jobs
{
  public struct Templates
  {
    public struct Job
    {
      public static readonly ID ID = new ID("{DC8AEFA5-E96F-4EBB-93B7-1AA9A5DC8155}");
    }     

    public struct JobCategory
    {
      public static readonly ID ID = new ID("{AB8E5DE4-82BC-4693-8C92-6F708618A371}");
    }   
    public struct JobPage
    {
      public static readonly ID ID = new ID("{A41971CE-2251-4F48-9E98-AEEFC1D83C2C}");
    }       

    public struct HasJobCategory
    {
      public static readonly ID ID = new ID("{752C3CAE-D40C-4A7A-BBC7-E37C48399E73}");

      public struct Fields
      {
        public static readonly ID JobCategoryTitle = new ID("{DEF208BF-D8EF-46E0-84FA-3B69DC30E444}");
      }
    }

    public struct HasJob
    {
      public static readonly ID ID = new ID("{EC18157A-C205-47FD-8F9D-1DD65E9F414F}");

      public struct Fields
      {
        public static readonly ID JobTitle = new ID("{A18E59F2-4808-401D-94AB-A1606BEFE9CB}");
        public static readonly ID JobDescription = new ID("{7674D8D1-2289-4E04-BCD0-B8ABF997DB7E}");
        public static readonly ID JobDate = new ID("{8DFFCE48-92A2-4EDD-A5CF-A172E14B2036}");
        public static readonly ID JobLink = new ID("{71356F7C-FCFA-43DF-8F0A-7B37717E7694}");
      }
    }
  }
}