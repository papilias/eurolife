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

    public PDFGroups GetPDFGroupedList([NotNull] Item item, PagingSettings pagingSettings)
    {
      if (item == null)
        throw new ArgumentNullException(nameof(item));
      
      var groups = GetMediaFromChildren(item, Templates.PDFFileGroup.ID);
      pagingSettings.CurrentGroupID = CurrentPDFGroup(groups, pagingSettings.CurrentGroupID);

      return new PDFGroups
      {
        Groups = groups.Select((i, index) => PDFFileGroupFactory(i, pagingSettings, index))
      };
    }

    public PDFGroup GetNextPage(PagingSettings pagingSettings, int page)
    {
      var group = Context.Database.GetItem(pagingSettings.CurrentGroupID);

      if (group == null)
        throw new System.ArgumentNullException(nameof(group));

      return PDFFileGroupFactory(group, pagingSettings, 1, page);
    }

    private ID CurrentPDFGroup(IEnumerable<Item> groups, ID currentGroupID = null)
    {
      return !ID.IsNullOrEmpty(currentGroupID) ?
          currentGroupID :
          groups.FirstOrDefault()?.ID;
    }

    private PDFGroup PDFFileGroupFactory(Item item, PagingSettings pagingSettings,  int index, int? page = null)
    {
      var isActive = IsActivePDFGroup(item, pagingSettings.CurrentGroupID, index);
      int pageNumber = page == null ? 0 : page < 0 ? 0 : page.Value;
      var pdfs = isActive ? GetFileGroupPDFs(item, pagingSettings, pageNumber) : null;

      return new PDFGroup
      {
        Item = item,
        IsActive = isActive,
        PDFs = pdfs,
        Page = pageNumber,
        ResultsOnPage = pagingSettings.ResultsOnPage,
        TotalResults = pdfs?.TotalNumberOfResults ?? 0,
        SubGroups = GetPDFGroupedList(item, pagingSettings)
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

    private ISearchResults GetFileGroupPDFs(Item item, PagingSettings pagingSettings, int pageNumber)
    {
      if (!item.FieldHasValue(Templates.PDFFileGroup.Fields.FileGroup))
        return null;

      var folder = item.TargetItem(Templates.PDFFileGroup.Fields.FileGroup);

      if (folder == null)
        return null;

      var query = new PDFQuery
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