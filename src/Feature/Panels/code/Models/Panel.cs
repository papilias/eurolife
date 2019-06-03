using System.Collections.Generic;
using Newtonsoft.Json;
using Sitecore.Data.Items;

namespace Wedia.Feature.Panels.Models
{
    public class Panel
    {
        //[JsonProperty("item")]
        //public Item Item { get; set; }
        [JsonProperty("title")]
        public string Title { get; set; }
        [JsonProperty("summary")]
        public string Summary { get; set; }
        [JsonProperty("items")]
        public IEnumerable<PanelItem> Items { get; set; }
        [JsonProperty("categories")]
        public IEnumerable<PanelCategory> Categories { get; set; }
        [JsonProperty("filters")]
        public IEnumerable<PanelRow> Filters { get; set; }
    }
}