using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sitecore.Data.Items;  
using Wedia.Foundation.DependencyInjection;
using Wedia.Foundation.Indexing.Repositories;   
using Wedia.Foundation.Indexing.Models;
using Wedia.Foundation.SitecoreExtensions.Extensions;
using Sitecore.Data;

namespace Wedia.Feature.Jobs.Repositories
{
  [Service(typeof(IJobsRepository))]
  public class JobsRepository : IJobsRepository
  {
    public ISearchServiceRepository _searchServiceRepository;

    public JobsRepository(ISearchServiceRepository searchServiceRepository)
    {
      _searchServiceRepository = searchServiceRepository;
    }   

    public Models.JobPageViewModel GetCategoriesAndJobs(Item contextItem)
    {
      var jobPage = new Models.JobPageViewModel
      {
        Item = contextItem,
        JobCategories = GetChildren(contextItem, Templates.JobCategory.ID)
           .Select(x => new Models.JobCategory
           {
             Item = x,
             Jobs = Get(x, Templates.Job.ID)
             .Select(j => new Models.Job
             {
               Item = j               
             })
           })
      };

      return jobPage;
    }

    private IEnumerable<Item> GetChildren(Item contextItem, ID TemplateID)
    {
      return contextItem.Children.Where(x => x.TemplateID == TemplateID);
    }


    private IEnumerable<Item> Get(Item contextItem, ID TemplateID, string orderby = "sortorder")
    {
      var searchService = _searchServiceRepository
        .Get(new SearchSettingsBase { Templates = new[] { TemplateID } });

      searchService.Settings.Root = contextItem ?? throw new ArgumentNullException(nameof(contextItem));

      var results = searchService.FindAll(0, 0, orderby);

      return results.Results.Select(d => d.Item).Where(i => i != null); 
    }
  }
}