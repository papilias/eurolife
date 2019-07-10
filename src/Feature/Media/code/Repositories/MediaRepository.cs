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
using Wedia.Foundation.Indexing.Repositories;
using Wedia.Foundation.Indexing.Models;

namespace Wedia.Feature.Media.Repositories
{
  [Service(typeof(IMediaRepository))]
  public class MediaRepository : IMediaRepository
  {
    private readonly ISearchServiceRepository _searchServiceRepository;

    public MediaRepository(ISearchServiceRepository searchServiceRepository)
    {
      _searchServiceRepository = searchServiceRepository;
    }

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

    public FileGroups GetFilesGroupedList([NotNull] Item item, PagingSettings pagingSettings)
    {
      if (item == null)
        throw new ArgumentNullException(nameof(item));
      
      var groups = GetMediaFromChildren(item, Templates.MediaFileFolderGroup.ID);
      pagingSettings.CurrentGroupID = CurrentFileGroup(groups, pagingSettings.CurrentGroupID);

      return new FileGroups
      {
        Groups = groups.Select((i, index) => FileGroupFactory(i, pagingSettings, index))
      };
    }

    public FileGroup GetNextPage(PagingSettings pagingSettings, int page)
    {
      var group = Context.Database.GetItem(pagingSettings.CurrentGroupID);

      if (group == null)
        throw new System.ArgumentNullException(nameof(group));

      return FileGroupFactory(group, pagingSettings, 1, page);
    }

    private ID CurrentFileGroup(IEnumerable<Item> groups, ID currentGroupID = null)
    {
      return !ID.IsNullOrEmpty(currentGroupID) ?
          currentGroupID :
          groups.FirstOrDefault()?.ID;
    }

    private FileGroup FileGroupFactory(Item item, PagingSettings pagingSettings,  int index, int? page = null)
    {
      var isActive = IsActiveFileGroup(item, pagingSettings.CurrentGroupID, index);
      int pageNumber = page == null ? 0 : page < 0 ? 0 : page.Value;
      var files = isActive ? GetFileFolderGroupFiles(item, pagingSettings, pageNumber) : null;

      return new FileGroup
      {
        Item = item,
        IsActive = isActive,
        Files = files,
        Page = pageNumber,
        ResultsOnPage = pagingSettings.ResultsOnPage,
        TotalResults = files?.TotalNumberOfResults ?? 0,
        SubGroups = GetFilesGroupedList(item, pagingSettings)
      };
    }

    private bool IsActiveFileGroup(Item item, ID currentID, int index)
    {
      var isTheSameItem = item.ID == currentID;
      var isParentActiveAndItIsTheFirstChild = (item.ParentID == currentID && index == 0);
      var isTheParentFromAnActiveChild = item.Children.SingleOrDefault(c => c.ID == currentID) != null;

      if (isTheSameItem || isParentActiveAndItIsTheFirstChild || isTheParentFromAnActiveChild)
        return true;

      return false;
    }

    private ISearchResults GetFileFolderGroupFiles(Item item, PagingSettings pagingSettings, int pageNumber)
    {
      if (!item.FieldHasValue(Templates.MediaFileFolderGroup.Fields.Group))
        return null;

      var folder = item.TargetItem(Templates.MediaFileFolderGroup.Fields.Group);

      if (folder == null)
        return null;

      var query = new FileQuery
      {
        Facets = null,
        QueryText = "*",
        NoOfResults = pagingSettings.ResultsOnPage,
        Page = pageNumber
      };

      
      var searchService = _searchServiceRepository
      .Get(new SearchSettingsBase { Templates = new[] { Templates.HasMedia.ID } });

      searchService.Settings.Root = folder;

      return searchService.Search(query);            
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