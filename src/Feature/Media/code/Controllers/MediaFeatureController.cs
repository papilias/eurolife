using Sitecore.Data;
using Sitecore.Mvc.Presentation;
using System.Web.Mvc;
using Wedia.Feature.Media.Models;
using Wedia.Feature.Media.Repositories;
using Sitecore.Sites;
using Wedia.Foundation.SitecoreExtensions.Utilities;
using Wedia.Foundation.SitecoreExtensions.Repositories;
using System.Net.Http;
using System.Net;
using System;
using System.Net.Http.Headers;

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

    public ActionResult MediaFileFoldersGroupedList(MediaFileGroupDto mediafileGroupDto)
    {
      var pagingSettings = _renderingPropertiesRepository.Get<PagingSettings>(RenderingContext.Current.Rendering);
      pagingSettings.CurrentGroupID = mediafileGroupDto.Group != null ? new ID(mediafileGroupDto.Group) : null;   

      var viewModel = _mediaRepository.GetFilesGroupedList(RenderingContext.Current.ContextItem, pagingSettings);
      return View(viewModel);
    }

    [HttpGet]
    public ActionResult AjaxMediaFileFolderGroupedList(MediaFileGroupDto mediafileGroupDto, int page = 1)
    {
      mediafileGroupDto.CurrentGroupID = new ID(mediafileGroupDto.Group);

      var viewModel = _mediaRepository.GetNextPage(mediafileGroupDto, page);

      if (viewModel.Files.Results == null)
        return Json(new { exhausted = true });
      
      var partial = Utilities.RenderRazorViewToString(ControllerContext, "MediaFileGroup", viewModel);
      return Json(new { exhausted = viewModel.TotalPagesCount == page + 1, data = partial }, JsonRequestBehavior.AllowGet);
    }

    [HttpGet]
    public HttpResponseMessage AjaxMediaPricingDocs(string fileName)
    {
      HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.Conflict);

      try
      {
        //string fname = $"{fileName}.pdf"; //"dat_" + dt.ToString("dd_MM_yyyy") + ".pdf";
        string path = $"~/pricedocs/{fileName}";
        string filePath = Server.MapPath(path);
        if (System.IO.File.Exists(path))
        {
          byte[] fileBytes = System.IO.File.ReadAllBytes(path);
          result.Content = new ByteArrayContent(fileBytes);
          result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/pdf");
          result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
          result.Content.Headers.ContentDisposition.FileName = fileName;
          result = new HttpResponseMessage(HttpStatusCode.OK);
        }
      }
      catch
      {
        result = new HttpResponseMessage(HttpStatusCode.InternalServerError);
      }

      return result;
    }

  }
}