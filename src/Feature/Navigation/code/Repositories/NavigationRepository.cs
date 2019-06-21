using Sitecore;
using Sitecore.Data.Items;
using Sitecore.Mvc.Presentation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Wedia.Feature.Navigation.Models;
using Wedia.Foundation.DependencyInjection;
using Wedia.Foundation.SitecoreExtensions.Extensions;

namespace Wedia.Feature.Navigation.Repositories
{
  [Service(typeof(INavigationRepository), Lifetime = Lifetime.Transient)]
  public class NavigationRepository : INavigationRepository
  {
    public Item ContextItem => RenderingContext.Current?.ContextItem ?? Context.Item;

    public Item NavigationRoot { get; }

    public NavigationRepository()
    {
      NavigationRoot = GetNavigationRoot(ContextItem);

      if (NavigationRoot == null)
      {
        throw new InvalidOperationException($"Cannot determine navigation root from '{ContextItem.Paths.FullPath}'");
      }
    }

    public NavigationItems GetBreadcrumb()
    {
      var items = new NavigationItems
      {
        NavItems = GetNavigationHierarcy(true).Reverse().ToList()
      };

      for (var i = 0; i < items.NavItems.Count - 1; i++)
      {
        items.NavItems[i].Level = i;
        items.NavItems[i].IsActive = i == items.NavItems.Count - 1;
      }

      return items;
    }

    public NavigationItems GetLinkMenuItems(Item menuRoot)
    {
      if (menuRoot == null)
      {
        throw new ArgumentNullException(nameof(menuRoot));
      }

      return GetChildNavigationItems(menuRoot, 0, 0);
    }

    private Item GetNavigationRoot(Item contextItem)
    {
      return contextItem.GetAncestorOrSelfOfTemplate(Templates.NavigationRoot.ID) ?? Context.Site.GetContextItem(Templates.NavigationRoot.ID);
    }

    private IEnumerable<NavigationItem> GetNavigationHierarcy(bool forceShowInMenu = false)
    {
      var item = ContextItem;

      while (item != null)
      {
        if (IncludeInNavigation(item, forceShowInMenu))
        {
          yield return CreateNavigationItem(item, 0);
        }

        item = item.Parent;
      }
    }

    private bool IncludeInNavigation(Item item, bool forceShowInMenu = false)
    {
      return item.HasContextLanguage()
          && item.DescendsFrom(Templates.Navigable.ID)
          && (forceShowInMenu || MainUtil.GetBool(item[Templates.Navigable.Fields.ShowInNavigation], false));
    }

    private NavigationItem CreateNavigationItem(Item item, int level, int maxLevel = -1)
    {
      var targetItem = item.DescendsFrom(Templates.Link.ID) ? item.TargetItem(Templates.Link.Fields.Link) : item;

      return new NavigationItem
      {
        Item = item,
        Url = item.DescendsFrom(Templates.Link.ID) ? item.LinkFieldUrl(Templates.Link.Fields.Link) : item.Url(),
        Target = item.DescendsFrom(Templates.Link.ID) ? item.LinkFieldTarget(Templates.Link.Fields.Link) : "",
        IsActive = IsItemActive(targetItem ?? item)
      };
    }

    private bool IsItemActive(Item item)
    {
      return ContextItem.ID == item.ID || ContextItem.Axes.GetAncestors().Any(a => a.ID == item.ID);
    }

    private NavigationItems GetChildNavigationItems(Item parentItem, int level, int maxLevel)
    {
      if (level > maxLevel || !parentItem.HasChildren)
      {
        return null;
      }

      var childItems = parentItem
          .Children
          .Where(item => IncludeInNavigation(item))
          .Select(i => CreateNavigationItem(i, level, maxLevel));

      var navItems = new NavigationItems {
        NavItems = childItems.ToList()
      };

      if (parentItem.DescendsFrom(Templates.NavigationRoot.ID))
      {
        navItems.Title = parentItem.Fields[Templates.NavigationRoot.Fields.Title]?.Value;
      }

      return navItems;

    }

  }
}