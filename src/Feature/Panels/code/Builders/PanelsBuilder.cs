using Sitecore.Data.Items;
using System.Collections.Generic;
using System.Linq;
using Wedia.Feature.Panels.Models;
using Wedia.Feature.Panels.Repositories;
using Wedia.Foundation.DependencyInjection;
using Wedia.Foundation.SitecoreExtensions.Extensions;

namespace Wedia.Feature.Panels.Builders
{
    [Service(typeof(IPanelsBuilder))]
    public class PanelsBuilder : IPanelsBuilder
    {
        private readonly IPanelsRepository _repository;

        public PanelsBuilder(IPanelsRepository panelsRepository)
        {
            _repository = panelsRepository;
        }

        public Panel Build(Item panel)
        {
            return new Panel
            {
                Title = panel.Fields[Templates.Panel.Fields.Title].Value,
                Summary = panel.Fields[Templates.Panel.Fields.Summary].Value,
                Items = _repository.GetItems(panel),
                Categories = _repository.GetCategories(panel),
                Filters = _repository.GetFilters(panel)
            };
        }

        //public static Dictionary<string, string> GetRowValues(PanelItem panelItem, PanelCategory category)
        //{
        //    var returnValue = string.Empty;
        //    var filterOptions = "[";
        //    if (category.IsMain)
        //    {
        //        returnValue += $@"<div class=""grid-table-cell grid-table-cell--heading"">{panelItem.Item.Field(Templates.PanelItem.Fields.Title)}</div>";
        //    }


        //    foreach (var row in category.Rows.Select( (value, i) => new { value, i} ))
        //    {

        //        var item = panelItem.Rows.SingleOrDefault(i => i.Item.ParentID == row.value.ID);

        //        if (item == null)
        //        {
        //            continue;
        //        }

        //        filterOptions += $"\"{item.Item.Name.Replace(" ", "_")}\"";

        //        if (row.i < category.Rows.Count())
        //        {
        //            filterOptions += ",";
        //        }

        //        if (!item.Item.FieldHasValue(Templates.PanelRowItemValue.Fields.Value))
        //        {
        //            var tableClass = item.IsChecked ? "service-provided" : "service-not-provided";
        //            returnValue += $@"
        //            <div class=""grid-table-cell {tableClass}""></div>";
        //        }
        //        else
        //        {
        //            returnValue += $@"<div class=""grid-table-cell"">
        //                            {item.Item.Field(Templates.PanelRowItemValue.Fields.Value)}
        //                        </div>";
        //        }
        //    }
        //    filterOptions += "]";

        //    return new Dictionary<string, string>
        //    {
        //        { "html", returnValue },
        //        { "filterOptions", filterOptions }
        //    };
        //}
    }
}