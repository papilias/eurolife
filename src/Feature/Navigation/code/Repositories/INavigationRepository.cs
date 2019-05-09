using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Wedia.Feature.Navigation.Models;

namespace Wedia.Feature.Navigation.Repositories
{
    public interface INavigationRepository
    {
        NavigationItems GetBreadcrumb();
    }
}
