using System.Collections.Generic;
using Sitecore.Data.Items;

namespace Wedia.Feature.Highlight.Repositories
{
    public interface IHighlightsRepository
    {
        IEnumerable<Item> GetHighlightsCTA(Item contextItem);
    }
}
