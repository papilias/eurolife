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

    public IEnumerable<TargetGroup> GetTargetGroups(Item contextItem)
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
  }
}