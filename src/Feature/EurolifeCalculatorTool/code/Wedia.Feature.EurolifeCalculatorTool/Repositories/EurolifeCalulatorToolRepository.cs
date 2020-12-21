using Sitecore.Data.Items;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Wedia.Feature.EurolifeCalculatorTool.Models;
using Wedia.Foundation.DependencyInjection;
using Wedia.Foundation.SitecoreExtensions.Extensions;

namespace Wedia.Feature.EurolifeCalculatorTool.Repositories
{
  [Service(typeof(IEurolifeCalulatorToolRepository))]
  public class EurolifeCalulatorToolRepository : IEurolifeCalulatorToolRepository
  {
    Sitecore.Resources.Media.MediaUrlOptions _mediaUrlOptions;


    public EurolifeCalulatorToolRepository()
    {
      _mediaUrlOptions = new Sitecore.Resources.Media.MediaUrlOptions
      {       
        AlwaysIncludeServerUrl = false
      };
    }    

    public IEnumerable<TargetGroup> GetAvailableTargetGroups(Item contextItem)
    {
      var targetGroupList = contextItem
                            .Children.Where(x => x.TemplateID == Templates.TargetGroupList.ID)
                            .FirstOrDefault() ?? throw new ArgumentNullException(nameof(contextItem));

      var targetGroupItems = targetGroupList
                             .Children.Where(x => x.TemplateID == Templates.TargetGroup.ID)
                             .ToList() ?? throw new ArgumentNullException(nameof(contextItem));

      var list = new List<TargetGroup>();

      foreach (var item in targetGroupItems)
        list.Add(MappingTargetGroupItem(item));

      return list;
    }

    public IEnumerable<FamilyMember> GetAvailableFamilyMembers(Item contextItem, string targetGroupKey)
    {
      var familyMembersList = contextItem
                            .Children.Where(x => x.TemplateID == Templates.FamilyMembersList.ID)
                            .FirstOrDefault() ?? throw new ArgumentNullException(nameof(contextItem));

      var familyMemberItems = familyMembersList
                             .Children.Where(x => x.TemplateID == Templates.FamilyMember.ID)
                             .ToList() ?? throw new ArgumentNullException(nameof(contextItem));

      var list = new List<FamilyMember>();

      foreach (var item in familyMemberItems)
        list.Add(MappingFamilyMemberItem(item));

      //filter list based on targetGroupKey
      if(targetGroupKey == Constants.Family_Target_Me)
      {
        list.RemoveAll(x => x.Key != Constants.Family_Target_Me);
      }

      if (targetGroupKey == Constants.Family_Target_Child)
      {
        list.RemoveAll(x => x.Key != Constants.Family_Target_Child);
      }

      if (targetGroupKey == Constants.Family_Target_Us)
      {
        list.RemoveAll(x => x.Key != Constants.Family_Target_Father 
                         && x.Key != Constants.Family_Target_Mother);
      }

      if (targetGroupKey == Constants.Family_Target_Family)
      {
        list.RemoveAll(x => x.Key != Constants.Family_Target_Father
                         && x.Key != Constants.Family_Target_Mother
                         && x.Key != Constants.Family_Target_Son
                         && x.Key != Constants.Family_Target_Daughter);
      }

      return list;
    }

    private TargetGroup MappingTargetGroupItem(Item item)
    {
      return new TargetGroup 
      {
        Title = item.Fields[Templates.HasTitle.Fields.Title].ToString(),
        Key = item.Fields[Templates.HasKey.Fields.Key].ToString(),
        Description = item.Fields[Templates.HasDescription.Fields.Description].ToString(),
        Image = item.FieldHasValue(Templates.HasImage.Fields.Image)
          ? item.ImageUrl(Templates.HasImage.Fields.Image, _mediaUrlOptions)
          : string.Empty
      };
    }

    private FamilyMember MappingFamilyMemberItem(Item item)
    {
      return new FamilyMember
      {
        Title = item.Fields[Templates.HasTitle.Fields.Title].ToString(),
        Key = item.Fields[Templates.HasKey.Fields.Key].ToString(),       
        Image = item.FieldHasValue(Templates.HasImage.Fields.Image)
          ? item.ImageUrl(Templates.HasImage.Fields.Image, _mediaUrlOptions)
          : string.Empty
      };
    }
  }
}