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

        public NavigationItems GetBreadcrumb()
        {
            var items = new NavigationItems
            {
                NavItems = GetNavigationHierarcy(true).Reverse().ToList()
            };

            for (var i = 0; i < items.NavItems.Count - 1; i++)
            {
                items.NavItems[i].IsActive = i == items.NavItems.Count - 1;
            }

            return items;
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
            var targetITem = item;

            return new NavigationItem
            {
                Item = item,
                Url = item.Url(),
                IsActive = IsItemActive(targetITem)
            };
        }

        private bool IsItemActive(Item item)
        {
            return ContextItem.ID == item.ID;
        }
    }
}