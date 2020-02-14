using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sitecore.Data.Items;

namespace Wedia.Feature.Jobs.Repositories
{
  public interface IJobsRepository
  {
    Models.JobPageViewModel GetCategoriesAndJobs(Item contextItem);
  }
}