using Sitecore.Mvc.Presentation;
using System.Web.Mvc;
using Wedia.Feature.News.Repositories;
using Wedia.Foundation.SitecoreExtensions.Extensions;

namespace Wedia.Feature.News.Controllers
{
  public class NewsController : Controller
  {
    private readonly INewsRepository _newsRepository;

    public NewsController(INewsRepository newsRepository)
    {
      _newsRepository = newsRepository;
    }

    public ActionResult NewsList()
    {
      var items = _newsRepository.GetList(RenderingContext.Current.Rendering.Item);
      
      return View("CSRArticlesList", items);
    }

    public ActionResult LatestNews()
    {
      var count = RenderingContext.Current.Rendering.GetIntegerParameter("count", 3);
      var items = _newsRepository.GetLatest(RenderingContext.Current.Rendering.Item, count);

      return View("LatestNews", items);
    }

    public ActionResult ArticleNavigation()
    {
      var navigation = _newsRepository.GetArticleNavigation(RenderingContext.Current.Rendering.Item);
      return View("ArticleNavigation", navigation);
    }
  }
}