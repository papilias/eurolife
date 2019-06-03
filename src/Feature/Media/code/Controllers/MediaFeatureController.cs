using Sitecore.Data;
using Sitecore.Mvc.Presentation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Wedia.Feature.Media.Models;
using Wedia.Feature.Media.Repositories;

namespace Wedia.Feature.Media.Controllers
{
    public class MediaFeatureController : Controller
    {
        private readonly IMediaRepository _mediaRepository;

        public MediaFeatureController(IMediaRepository mediaRepository)
        {
            _mediaRepository = mediaRepository;
        }

        public ActionResult PDFGroupedList(PdfGroupDto currentGroup)
        {
            ID value;
            ID.TryParse(currentGroup.Group, out value);
            var viewModel = _mediaRepository.GetPDFGroupedList(RenderingContext.Current.ContextItem, value);
            return View(viewModel);
        }
    }
}