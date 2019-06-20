using Sitecore.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Wedia.Feature.Person
{
  public struct Templates
  {
    public struct Person
    {
      public static readonly ID ID = new ID("{E876D234-83DB-4B57-BE87-365D9576377A}");

      public struct Fields
      {
        public static readonly ID Title = new ID("{902AD41A-7A0A-43FC-9080-0A858D455597}");
        public const string Title_FieldName = "PersonTitle";
        public static readonly ID Position = new ID("{E57A5FEE-E68D-4D37-AC1F-EDC51E551121}");
        public const string Position_FieldName = "PersonPosition";
        public static readonly ID Image = new ID("{A212C93A-7C83-4FED-BC5A-5B035BAEFF50}");
        public const string Image_FieldName = "PersonImage";
        public static readonly ID Body = new ID("{3A28C78D-3C5E-4D7B-837B-9F511FB70D80}");
        public const string Body_FieldName = "PersonBody";
        public static readonly ID Quote = new ID("{47E95858-EFCC-4862-8A26-3905105ECE5B}");
      }
    }

    public struct PersonGroup
    {
      public static readonly ID ID = new ID("{5816C3B2-E272-4933-8BC4-D025F3C288B2}");

      public struct Fields
      {
        public static readonly ID Persons = new ID("{C5270F95-33AA-4DA7-B3B7-0EEA5DD1B4B1}");
      }
    }
  }
}