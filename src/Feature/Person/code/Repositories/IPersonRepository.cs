using Sitecore.Data.Items;
using Wedia.Feature.Person.Models;

namespace Wedia.Feature.Person.Repositories
{
    public interface IPersonRepository
    {
        ResultsViewModel GetItemsPaged(Item contextItem, PagingSettings paggingSettings, int? page);
    }
}
