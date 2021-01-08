using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Wedia.Feature.EurolifeCalculatorTool.Models
{
  public class GroupOfBundle : BaseEntity
  {
    public Price Price { get; set; }
    public HtmlString Description { get; set; }
    public string Label { get; set; }
  }
}