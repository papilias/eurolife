using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Wedia.Feature.EurolifeCalculatorTool.Models
{
  public class FamilyMember : BaseEntity
  {
    public bool IsPrimaryInsured { get; set; }
    public DateTime BirthDate { get; set; }
    public string Image { get; set; }
  }
}