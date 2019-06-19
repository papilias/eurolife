using Sitecore;
using Sitecore.Mvc.Presentation;
using System.Web.Mvc;
using Wedia.Feature.Person.Repositories;
using Wedia.Foundation.Alerts.Extensions;
using Wedia.Foundation.Alerts.Models;
using Wedia.Foundation.Dictionary.Repositories;

namespace Wedia.Feature.Person.Controllers
{
  public class PersonsController : Controller
  {
    private readonly IPersonRepository _personRepository;

    public PersonsController(IPersonRepository personRepository)
    {
      _personRepository = personRepository;
    }

    public ActionResult Index(int? page)
    {
      var items = _personRepository.Get(RenderingContext.Current.Rendering.Item);
      return View(items);
    }

    public ActionResult EmployeesCarousel()
    {
      
      if (string.IsNullOrEmpty(RenderingContext.Current.Rendering.DataSource))
      {
        return Context.PageMode.IsExperienceEditor
            ? this.InfoMessage(
                new InfoMessage(
                    DictionaryPhraseRepository.Current.Get("/Person/Carousel/Invalid Datasource", "Invalid Datasource"),
                    InfoMessage.MessageType.Warning))
                    : null;
      }

      var contextItem = RenderingContext.Current.Rendering.Item;

      var items = _personRepository.GetCarousel(contextItem);
      return View(items);
    }

  }
}