using System;
using System.Collections.Generic;
using System.Linq;
using Sitecore;
using Sitecore.Data;
using Sitecore.Data.Items;
using Wedia.Feature.Media.Models;
using Wedia.Foundation.DependencyInjection;
using Wedia.Foundation.SitecoreExtensions.Extensions;
using Sitecore.Mvc.Extensions;

namespace Wedia.Feature.Media.Repositories
{
  [Service(typeof(IMediaRepository))]
  public class MediaRepository : IMediaRepository
  {
    public static IEnumerable<MediaSelectorElement> Get([NotNull] Item item)
    {
      if (item == null)
        throw new ArgumentNullException(nameof(item));

      var items = GetMediaFromMultiList(item, Templates.HasMediaSelector.Fields.MediaSelector, Templates.HasMedia.ID).ToArray();
      if (!items.Any())
        items = GetMediaFromChildren(item, Templates.HasMedia.ID).ToArray();

      var active = "active";
      foreach (var child in items)
      {
        if (child.DescendsFrom(Templates.HasMediaVideo.ID) && child[Templates.HasMediaVideo.Fields.VideoLink].IsEmptyOrNull() && child[Templates.HasMedia.Fields.Thumbnail].IsEmptyOrNull())
        {
          continue;
        }

        yield return new MediaSelectorElement
        {
          Item = child,
          Active = active
        };
        active = "";
      }
    }

    public PDFGroups GetPDFGroupedList([NotNull] Item item, ID currentGroupID = null)
    {
      if (item == null)
        throw new ArgumentNullException(nameof(item));


      var groups = GetMediaFromChildren(item, Templates.PDFGroup.ID);
      currentGroupID = CurrentPDFGroup(groups, currentGroupID);

      return new PDFGroups
      {
        Groups = groups.Select((i, index) => PDFGroupFactory(i, currentGroupID, index))
      };
    }

    private ID CurrentPDFGroup(IEnumerable<Item> groups, ID currentGroupID = null)
    {
      return !ID.IsNullOrEmpty(currentGroupID) ?
          currentGroupID :
          groups.FirstOrDefault()?.ID;
    }

    private PDFGroup PDFGroupFactory(Item item, ID currentGroupID, int index)
    {
      var isActive = IsActivePDFGroup(item, currentGroupID, index);
      return new PDFGroup
      {
        Item = item,
        IsActive = isActive,
        PDFs = isActive ? GetMediaFromMultiList(item, Templates.PDFGroup.Fields.Files, Templates.PDF.ID) : null,
        SubGroups = GetPDFGroupedList(item, currentGroupID)
      };
    }

    private bool IsActivePDFGroup(Item item, ID currentID, int index)
    {
      var isTheSameItem = item.ID == currentID;
      var isParentActiveAndItIsTheFirstChild = (item.ParentID == currentID && index == 0);
      var isTheParentFromAnActiveChild = item.Children.SingleOrDefault(c => c.ID == currentID) != null;

      if (isTheSameItem || isParentActiveAndItIsTheFirstChild || isTheParentFromAnActiveChild)
        return true;

      return false;
    }


    private static IEnumerable<Item> GetMediaFromMultiList(Item item, ID fieldID, ID descendanTemplate)
    {
      return item.GetMultiListValueItems(fieldID).Where(i => i.DescendsFrom(descendanTemplate));
    }

    private static IEnumerable<Item> GetMediaFromChildren(Item item, ID descendanTemplate)
    {
      return item.Children.Where(i => i.DescendsFrom(descendanTemplate));
    }
  }
}