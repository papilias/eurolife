using Sitecore.Data.Items;
using System.Collections.Generic;
using Wedia.Feature.Person.Models;

namespace Wedia.Feature.Person.Repositories
{
  public interface IPersonRepository
  {
    IEnumerable<Item> GetEmployees(Item contextItem);
    IEnumerable<Item> GetCarousel(Item context, Item pageItem);
    IEnumerable<ConsultantsGroup> GetConsultantsGroups(Item contextItem);
  }
}
