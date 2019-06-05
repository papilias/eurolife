using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Sitecore.Data.Items;

namespace Wedia.Feature.Highlight.Repositories
{
    public interface IHighlightsRepository
    {
        IEnumerable<Item> GetHighlightsCTA(Item contextItem);
    }
}
