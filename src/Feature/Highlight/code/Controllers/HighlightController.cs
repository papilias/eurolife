using Sitecore;
using Sitecore.Mvc.Presentation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Wedia.Feature.Highlight.Repositories;
using Wedia.Foundation.Alerts;
using Wedia.Foundation.Alerts.Extensions;
using Wedia.Foundation.Alerts.Models;

namespace Wedia.Feature.Highlight.Controllers
{
    public class HighlightController : Controller
    {
        private readonly IHighlightsRepository _repository;

        public HighlightController(IHighlightsRepository highlightsRepository)
        {
            _repository = highlightsRepository;
        }        

        // GET: Highlights with CTA
        public ActionResult GetHighlightsCTAItems()
        {
            var dataSourceItem = RenderingContext.Current.Rendering.Item;

            if (!dataSourceItem?.DescendsFrom(Templates.HighlightsFolder.ID) ?? true)
            {
                return Context.PageMode.IsExperienceEditor ?
                    this.InfoMessage(new InfoMessage(AlertTexts.InvalidDataSourceTemplateFriendlyMessage, InfoMessage.MessageType.Error)) :
                    null;
            }

            return View("HighlightsSectionCTA", _repository.GetHighlightsCTA(RenderingContext.Current.Rendering.Item));
        }
        
    }
}