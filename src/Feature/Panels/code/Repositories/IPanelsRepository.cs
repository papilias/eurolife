using System.Collections.Generic;
using Sitecore.Data.Items;
using Wedia.Feature.Panels.Models;

namespace Wedia.Feature.Panels.Repositories
{
    public interface IPanelsRepository
    {
        IEnumerable<PanelItem> GetItems(Item panel);
        IEnumerable<PanelCategory> GetCategories(Item panel);
        IEnumerable<PanelRow> GetFilters(Item panel);
    }
}
