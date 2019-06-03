using Sitecore.Data.Items;
using System.Collections.Generic;
using System.Linq;
using Wedia.Feature.Panels.Models;
using Wedia.Feature.Panels.Repositories;
using Wedia.Foundation.DependencyInjection;
using Wedia.Foundation.Dictionary.Repositories;

namespace Wedia.Feature.Panels.Builders
{
    [Service(typeof(IPanelsBuilder))]
    public class PanelsBuilder : IPanelsBuilder
    {
        private readonly IPanelsRepository _repository;

        public PanelsBuilder(IPanelsRepository panelsRepository)
        {
            _repository = panelsRepository;
        }

        public Panel Build(Item panel)
        {
            var filters = new Filters
            {
                Title = DictionaryPhraseRepository.Current.Get("/Panel/Product Panel/Filters Title", "FILTER RESULTS"),
                ApplyButton = DictionaryPhraseRepository.Current.Get("/Panel/Product Panel/Apply Button", "Apply"),
                CancelButton = DictionaryPhraseRepository.Current.Get("/Panel/Product Panel/Cancel Button", "Cancel"),
                Items = _repository.GetFilters(panel)
            };

            return new Panel
            {
                Title = panel.Fields[Templates.Panel.Fields.Title].Value,
                Summary = panel.Fields[Templates.Panel.Fields.Summary].Value,
                Items = _repository.GetItems(panel),
                Categories = _repository.GetCategories(panel),
                Filters = filters
            };
        }
    }
}