using Sitecore.Mvc.Presentation;
using System.Web.Mvc;
using Wedia.Feature.Person.Models;
using Wedia.Feature.Person.Repositories;
using Wedia.Foundation.SitecoreExtensions.Repositories;

namespace Wedia.Feature.Person.Controllers
{
    public class PersonController : Controller
    {
        private readonly IPersonRepository _personRepository;
        private readonly IRenderingPropertiesRepository _renderingPropertiesRepository;

        public PersonController(IPersonRepository personRepository, IRenderingPropertiesRepository renderingPropertiesRepository)
        {
            _personRepository = personRepository;
            _renderingPropertiesRepository = renderingPropertiesRepository;
        }

        public ActionResult Index(int? page)
        {
            var viewModel = GetResults(page);
            return View(viewModel);
        }

        public ActionResult EmployeesCarousel(int? page)
        {
            var viewModel = GetResults(page);
            return View(viewModel);
        }

        private ResultsViewModel GetResults(int? page)
        {
            if (HttpContext.Items.Contains("PersonItemResults"))
            {
                return HttpContext.Items["PersonItemResults"] as ResultsViewModel;
            }

            var paggingSettings = _renderingPropertiesRepository.Get<PagingSettings>(RenderingContext.Current.Rendering);
            var viewModel = _personRepository.GetItemsPaged(RenderingContext.Current.Rendering.Item, paggingSettings, page);
            HttpContext?.Items.Add("PersonItemResults", viewModel);
            return viewModel;
        }
    }
}