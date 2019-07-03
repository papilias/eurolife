using Sitecore.Data;
using Sitecore.Mvc.Presentation;
using System.Web.Mvc;
using Wedia.Feature.Media.Models;
using Wedia.Feature.Media.Repositories;
using Sitecore.Sites;
using Wedia.Foundation.SitecoreExtensions.Utilities;

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
      ID id;
      ID.TryParse(currentGroup.Group, out id);
      var viewModel = _mediaRepository.GetPDFGroupedList(RenderingContext.Current.ContextItem, id);
      return View(viewModel);
    }

    [HttpGet]
    public ActionResult AjaxPDFGroupedList(PdfGroupDto currentGroup, int page = 1)
    {
      ID id;
      ID.TryParse(currentGroup.Group, out id);

      var viewModel = _mediaRepository.GetNextPage(id, page);

      if (viewModel.PDFs.Results == null)
        return Json(new { exhausted = true });
      
      var partial = Utilities.RenderRazorViewToString(ControllerContext, "PDFGroup", viewModel);
      return Json(new { exhausted = viewModel.TotalPagesCount == page - 1, data = partial }, JsonRequestBehavior.AllowGet);
    }

  }
}