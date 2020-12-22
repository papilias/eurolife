using System;
using System.Collections.Generic;
using System.Globalization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Wedia.Feature.EurolifeCalculatorTool.Models.Api
{
  public class MainInsuredHealthCovers
  {
    public Welcome Welcome { get; set; }
    public Header Header { get; set; }
    public MainInsured MainInsured { get; set; }
  }


  public partial class Welcome
  {
    public Header Header { get; set; }
    public MainInsured MainInsured { get; set; }
    public long ProductCode { get; set; }
    public long CovCode { get; set; }
  }

  public partial class Header
  {
    public long ServicesVersion { get; set; }
    public string CultureName { get; set; }
    public object TimeDiff { get; set; }
  }

  public partial class MainInsured
  {
    public object Lastname { get; set; }
    public object FirstName { get; set; }
    public object FatherName { get; set; }
    public long Age { get; set; }
    public DateTimeOffset BirthDate { get; set; }
    public long Profession { get; set; }
    public long ProfessionCategory { get; set; }
    public string ProfessionDescription { get; set; }
    public object MinBirthDate { get; set; }
    public object MaxBirthDate { get; set; }
    public long Sex { get; set; }
    public object Email { get; set; }
    public object Relationship { get; set; }
    public object Addresses { get; set; }
    public object Afm { get; set; }
    public object Adt { get; set; }
    public long Doy { get; set; }
    public long Id { get; set; }
    public object Amka { get; set; }
    public object Height { get; set; }
    public object Weight { get; set; }
    public object Mobile { get; set; }
    public object Nationality { get; set; }
    public object Adtcountry { get; set; }
    public object Brcountry { get; set; }
    public object ConsentSensitiveData { get; set; }
    public object ConsentsErb { get; set; }
    public object ConsentsThirdParty { get; set; }
    public bool IsCustomer { get; set; }
    public bool LegalPerson { get; set; }
    public long LegalType { get; set; }
    public object LegalRep { get; set; }
    public object DisplayedAge { get; set; }
  }

}