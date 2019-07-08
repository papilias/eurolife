using Sitecore.Data;
using Sitecore.Mvc.Presentation;
using System.Web.Mvc;
using Wedia.Feature.Media.Models;
using Wedia.Feature.Media.Repositories;
using Sitecore.Sites;
using Wedia.Foundation.SitecoreExtensions.Utilities;
using Wedia.Foundation.SitecoreExtensions.Repositories;

namespace Wedia.Feature.Media.Controllers
{
  public class MediaFeatureController : Controller
  {
    private readonly IMediaRepository _mediaRepository;

    private readonly IRenderingPropertiesRepository _renderingPropertiesRepository;

    public MediaFeatureController(IMediaRepository mediaRepository, IRenderingPropertiesRepository renderingPropertiesRepository)
    {
      _mediaRepository = mediaRepository;
      _renderingPropertiesRepository = renderingPropertiesRepository;
    }

    public ActionResult PDFGroupedList(PDFGroupDto pdfGroupDto)
    {
      var pagingSettings = _renderingPropertiesRepository.Get<PagingSettings>(RenderingContext.Current.Rendering);
      pagingSettings.CurrentGroupID = pdfGroupDto.Group != null ? new ID(pdfGroupDto.Group) : null;   

      var viewModel = _mediaRepository.GetPDFGroupedList(RenderingContext.Current.ContextItem, pagingSettings);
      return View(viewModel);
    }

    [HttpGet]
    public ActionResult AjaxPDFGroupedList(PDFGroupDto pdfGroupDto, int page = 1)
    {
      pdfGroupDto.CurrentGroupID = new ID(pdfGroupDto.Group);

      var viewModel = _mediaRepository.GetNextPage(pdfGroupDto, page);

      if (viewModel.PDFs.Results == null)
        return Json(new { exhausted = true });
      
      var partial = Utilities.RenderRazorViewToString(ControllerContext, "PDFGroup", viewModel);
      return Json(new { exhausted = viewModel.TotalPagesCount == page + 1, data = partial }, JsonRequestBehavior.AllowGet);
    }

  }
}