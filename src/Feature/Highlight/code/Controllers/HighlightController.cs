using Sitecore.Mvc.Presentation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Wedia.Feature.Highlight.Repositories;

namespace Wedia.Feature.Highlight.Controllers
{
    public class HighlightController : Controller
    {  
        public HighlightController(IHighlightsRepository highlightsRepository)
        {
            this.Repository = highlightsRepository;
        }

        private IHighlightsRepository Repository { get; }

        // GET: Highlights with CTA
        public ActionResult GetHighlightsCTAItems()
        {
            return View("HighlightsSectionCTA", Repository.GetHighlightsCTA(RenderingContext.Current.Rendering.Item));
        }
    }
}