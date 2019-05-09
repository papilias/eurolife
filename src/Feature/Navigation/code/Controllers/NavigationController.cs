using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Wedia.Feature.Navigation.Repositories;

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
    }
}