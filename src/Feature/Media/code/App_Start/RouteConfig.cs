using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using System.Web.Routing;

namespace Wedia.Feature.Media
{
  public class RouteConfig
  {
    public static void RegisterRoutes(RouteCollection routes)
    {
      routes.MapRoute("loadmore-pdfs", "api/feature/media/ajax-pdfs", new { controller = "MediaFeature", action = "AjaxPDFGroupedList", id = UrlParameter.Optional });
    }
  }
}