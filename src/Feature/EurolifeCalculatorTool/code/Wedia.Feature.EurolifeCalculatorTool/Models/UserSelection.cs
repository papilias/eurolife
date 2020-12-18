using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Wedia.Feature.EurolifeCalculatorTool.Models
{
  public class UserSelection
  {
    public string ItemId { get; set; }
    public string Step { get; set; }
    public TargetGroup TargetGroup { get; set; }
    public IEnumerable<FamilyMember> FamilyMembers { get; set; }
    public InsuranceProfile InsuranceProfile { get; set; }
    public Product Product { get; set; }
    public Bundle Bundle { get; set; }
  }

  public class BaseSelection
  {
    public string Key { get; set; }
    public string Value { get; set; }
  }

  public class TargetGroup : BaseSelection
  {

  }

  public class FamilyMember : BaseSelection
  {
    public bool IsPrimaryInsured { get; set; }
    public DateTime BirthDate { get; set; }
  }

  public class InsuranceProfile
  {
    public double Price { get; set; }
    public RoomOffer RoomOffer { get; set; }
  }

  public class RoomOffer : BaseSelection
  {

  }

  public class Product : BaseSelection
  {
    public double Price { get; set; }
  }

  public class Bundle : BaseSelection
  {
    public double Price { get; set; }
    public string Description { get; set; }
  }
}