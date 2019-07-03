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

    public PDFGroups GetPDFGroupedList([NotNull] Item item, ID currentGroupID = null)
    {
      if (item == null)
        throw new ArgumentNullException(nameof(item));
      
      var groups = GetMediaFromChildren(item, Templates.PDFFileGroup.ID);
      currentGroupID = CurrentPDFGroup(groups, currentGroupID);

      return new PDFGroups
      {
        Groups = groups.Select((i, index) => PDFFileGroupFactory(i, currentGroupID, index))
      };
    }

    public PDFGroup GetNextPage(ID currentFileGroupID, int page)
    {
      var group = Context.Database.GetItem(currentFileGroupID);

      if (group == null)
        throw new System.ArgumentNullException(nameof(group));

      return PDFFileGroupFactory(group, currentFileGroupID, 1, page);
    }

    private ID CurrentPDFGroup(IEnumerable<Item> groups, ID currentGroupID = null)
    {
      return !ID.IsNullOrEmpty(currentGroupID) ?
          currentGroupID :
          groups.FirstOrDefault()?.ID;
    }

    private PDFGroup PDFFileGroupFactory(Item item, ID currentFileGroupID, int index, int? page = null)
    {
      var isActive = IsActivePDFGroup(item, currentFileGroupID, index);
      int pageNumber = page == null ? 0 : page < 0 ? 0 : page.Value;
      var pdfs = isActive ? GetFileGroupPDFs(item, pageNumber) : null;
      
      return new PDFGroup
      {
        Item = item,
        IsActive = isActive,
        PDFs = pdfs,
        Page = pageNumber,
        ResultsOnPage = Constants.ItemsPerPage,
        TotalResults = pdfs?.TotalNumberOfResults ?? 0,
        SubGroups = GetPDFGroupedList(item, currentFileGroupID)
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

    private ISearchResults GetFileGroupPDFs(Item item, int pageNumber)
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
        NoOfResults = 1,
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