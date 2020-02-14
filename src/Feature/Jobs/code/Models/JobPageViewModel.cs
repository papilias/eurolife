using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sitecore.Data.Items;

namespace Wedia.Feature.Jobs.Models
{
  public class JobPageViewModel
  {
    public Item Item { get; set; }
    public IEnumerable<JobCategory> JobCategories { get; set; }
  }         
}