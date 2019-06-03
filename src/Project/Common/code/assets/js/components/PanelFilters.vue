<template>
    <div class="filter">
        <span class="filter__trigger" @click="show = true">FILTER RESULTS</span>
        <div class="filter__results filter__results--active" v-show="show">

            <div class="filter__results__column" v-for="(filter,i) in propedFilters" :key="`proped-filter-${i}`">
                <div class="filter__results__heading">{{ filter.title }}</div>
                <panel-filter :filter="filter" v-model="selectedFilters"></panel-filter>
            </div>

            <div v-if="unPropedFilters.length > 0" class="filter__results__column">
                <div class="filter__results__heading"></div>
                <panel-filter v-for="(filter,i) in unPropedFilters" 
                              :filter="filter" 
                              :key="`unordered-filter-${i}`" 
                              v-model="selectedFilters"></panel-filter>
            </div>

            <div class="filter__actions">
                <span class="filter__apply js-apply-filters" @click="show = false">Cancel</span>
                <span class="filter__apply js-apply-filters" @click="apply">Apply</span>
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
                type: Array,
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
            apply() {
                EventBus.$emit("applyFilters", this.selectedFilters);
            }
        },
        mounted() {

            this.filters.forEach(filter => {
                if (!filter.isCheckbox)
                    this.propedFilters.push(filter);
                else
                    this.unPropedFilters.push(filter);
            });

        },
        components: {
            PanelFilter
        }
    }
</script>