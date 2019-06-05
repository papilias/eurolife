using System;
using System.Collections.Generic;
using System.Linq;
using Sitecore.Data.Items;
using Wedia.Foundation.DependencyInjection;

namespace Wedia.Feature.Highlight.Repositories
{   
    [Service(typeof(IHighlightsRepository))]
    public class HighlightsRepository : IHighlightsRepository
    {
        public IEnumerable<Item> GetHighlightsCTA(Item contextItem)
        {
            if (contextItem == null)
            {
                throw new ArgumentNullException(nameof(contextItem));
            }
            if (!contextItem.DescendsFrom(Templates.HighlightsFolder.ID))
            {
                throw new ArgumentException("Item must derive from HighlightsFolder", nameof(contextItem));
            }

            return contextItem.Children.Where(i => i.DescendsFrom(Templates.HighlightMain.ID)
            && i.DescendsFrom(Templates.HighlightCTA.ID));                
        }
    }
}