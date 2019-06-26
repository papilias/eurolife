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

    public ActionResult SocialLinks() => GetMenu("SocialMenu");

    public ActionResult LinksList() => GetMenu("LinksList");

    public ActionResult HorizontalNavigationLinks() => GetMenu("HorizontalNavigationLinks");

    public ActionResult GetMenu(string view)
    {
      if (string.IsNullOrEmpty(RenderingContext.Current.Rendering.DataSource))
      {
        return Context.PageMode.IsExperienceEditor
            ? this.InfoMessage(
                new InfoMessage(
                    DictionaryPhraseRepository.Current.Get("/Navigation/Link Menu/No Items", "This menu has no items,"),
                    InfoMessage.MessageType.Warning))
                    : null;
      }

      var item = RenderingContext.Current.Rendering.Item;
      var items = _navigationRepository.GetLinkMenuItems(item);

      return View(view, items);
    }
  }
}