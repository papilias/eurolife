<template>
    <section class="center center--1100 programs">
        <h1 class="h4 m-b-16 t-c">
            {{ panel.title }}
        </h1>

        <p class="m-b-48 t-c center center--650">
            {{ panel.summary }}
        </p>

        <panel-filters v-if="hasFilters" :filters="panel.filters"></panel-filters>

        <template v-for="category in panel.categories">
 
            <div v-if="!category.isMain" class="program-expander">
                <div class="program-heading">
                    <h2>
                        {{ category.title }}
                    </h2>
                </div>
                <panel-grid :key="`category-${category.id}`" :category="category" :items="panel.items"></panel-grid>
            </div>

            <panel-grid  v-else :key="`category-${category.id}`" :category="category" :items="panel.items" ></panel-grid>
                 
        </template>

    </section>
</template>

<script>
    import PanelFilters from "./PanelFilters";
    import PanelGrid from './PanelGrid';

    export default {
        props: {
            panel: {
                type: Object,
                required: true
            }
        },
        data: () => ({
            appliedFilters: []
        }),
        computed: {
            hasFilters() {
                return this.panel.filters && this.panel.filters.length > 0
            }
        },
        components: {
            PanelGrid,
            PanelFilters
        }
    }
</script>