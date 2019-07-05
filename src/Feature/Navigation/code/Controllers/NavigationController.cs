using Sitecore;
using Sitecore.Mvc.Presentation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Wedia.Feature.Navigation.Repositories;
using Wedia.Foundation.Alerts.Extensions;
using Wedia.Foundation.Alerts.Models;
using Wedia.Foundation.Dictionary.Repositories;
using Wedia.Foundation.SitecoreExtensions.Extensions;

namespace Wedia.Feature.Navigation.Controllers
{
  public class NavigationController : Controller
  {
    private readonly INavigationRepository _navigationRepository;

    public NavigationController(INavigationRepository navigationRepository)
    {
      _navigationRepository = navigationRepository;
    }

    // GET: Breadcrumb
    public ActionResult Breadcrumb()
    {
      var items = _navigationRepository.GetBreadcrumb();
      return View(items);
    }

    public ActionResult NavigationLinks() => GetMenu("NavigationLinks");

    public ActionResult LinkMenu() => GetMenu("LinkMenu");

    public ActionResult ArticlesLinkMenu() => GetMenu("ArticlesLinkMenu",
        RenderingContext.Current.Rendering.GetBoolParameter(Constants.NavigationParameters.Descending),
        RenderingContext.Current.Rendering.GetIntegerParameter(Constants.NavigationParameters.Limit) + 1);

    public ActionResult SocialLinks() => GetMenu("SocialMenu");

    public ActionResult LinksList() => GetMenu("LinksList");

    public ActionResult HorizontalNavigationLinks() => GetMenu("HorizontalNavigationLinks");

    public ActionResult GetMenu(string view, bool descending = false, int limit = 20)
    {
      if (string.IsNullOrEmpty(RenderingContext.Current.Rendering.DataSource))
      {
        return Context.PageMode.IsExperienceEditor
            ? this.InfoMessage(
                new InfoMessage(
                    DictionaryPhraseRepository.Current.Get("/Navigation/Link Menu/Missing Datasource", "Missing Datasource"),
                    InfoMessage.MessageType.Warning))
                    : null;
      }

      var item = RenderingContext.Current.Rendering.Item;
      var items = _navigationRepository.GetLinkMenuItems(item, descending, limit);

      return View(view, items);
    }
  }
}