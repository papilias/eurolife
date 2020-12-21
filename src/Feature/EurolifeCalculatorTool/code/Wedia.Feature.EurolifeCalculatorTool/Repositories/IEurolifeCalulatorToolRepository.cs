using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Sitecore.Data.Items;

namespace Wedia.Feature.EurolifeCalculatorTool.Repositories
{
  public interface IEurolifeCalulatorToolRepository
  {
    IEnumerable<Models.TargetGroup> GetAvailableTargetGroups(Item contextItem);
    IEnumerable<Models.FamilyMember> GetAvailableFamilyMembers(Item contextItem, string targetGroupKey);
  }
}
