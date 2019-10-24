<template>
  <div class="filter">
    <span class="filter__trigger" @click="show = true">{{ filters.title }}</span>
    <div class="filter__results" v-show="show">

      <div class="filter__results__column" v-for="(filter,i) in propedFilters" :key="`proped-filter-${i}`">
        <div class="filter__results__heading">{{ filter.title }}</div>
        <panel-filter :filter="filter" v-model="selectedFilters" @apply="apply"></panel-filter>
      </div>

      <div v-if="unPropedFilters.length > 0" class="filter__results__column">
        <div class="filter__results__heading"></div>
        <panel-filter v-for="(filter,i) in unPropedFilters"
                      :filter="filter"
                      :key="`unordered-filter-${i}`"
                      v-model="selectedFilters"></panel-filter>
      </div>

      <div class="filter__actions">
        <span class="filter__apply js-apply-filters" @click="cancel">{{ filters.cancelButton }}</span>        
      </div>
    </div>
  </div>
</template>

<script>
  import PanelFilter from './PanelFilter';
  import { EventBus } from '../EventBus.js';    

  export default {
    props: {
      filters: {
        type: Object,
        require: false
      }
    },
    data: () => ({
      show: false,
      propedFilters: [],
      unPropedFilters: [],
      selectedFilters: []
    }),
    methods: {
      makeFilters() {         
        if (!this.filters.items)
          return;

        this.filters.items.forEach(filter => {
          if (!filter.isCheckbox)
            this.propedFilters.push(filter);
          else
            this.unPropedFilters.push(filter);
        });
      },
      apply() {         
        EventBus.$emit("applyFilters", this.selectedFilters);         
      },
      cancel() {  
        const filterResults = document.querySelector(".filter__results");
        filterResults.classList.remove("filter__results--active");
        this.show = false;
      }
    },
    mounted() {
      this.makeFilters();
    },
    components: {
      PanelFilter
    }
  }
</script>