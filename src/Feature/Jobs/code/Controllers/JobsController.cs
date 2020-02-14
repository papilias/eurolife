using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Sitecore.Mvc.Presentation;
using Wedia.Feature.Jobs.Repositories;

namespace Wedia.Feature.Jobs.Controllers
{
  public class JobsController : Controller
  {
    private readonly IJobsRepository _jobsRepository;

    public JobsController(IJobsRepository jobsRepository)
    {
      _jobsRepository = jobsRepository;
    }

    /// <summary>
    /// render jobs for each category under the job page
    /// </summary>
    /// <returns></returns>
    public ActionResult CategoriesAndJobs()
    {
      var model = _jobsRepository.GetCategoriesAndJobs(RenderingContext.Current.Rendering.Item);
      return View(model);
    }
  }
}