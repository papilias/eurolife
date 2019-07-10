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
      routes.MapRoute("loadmore-files", "api/feature/media/ajax-files", new { controller = "MediaFeature", action = "AjaxMediaFileFolderGroupedList", id = UrlParameter.Optional });
    }
  }
}