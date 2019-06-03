<template>
    <div v-if="!hideColumn" class="grid-table-column grid-slide program program--visible">

        <div v-if="category.isMain" class="grid-table-cell grid-table-cell--heading">
            {{ item.title }}
        </div>

        <template v-for="row in category.rows">
            <panel-item :item="findItem(row)"></panel-item>
        </template>
    </div>
</template>

<script>
    import PanelItem from './PanelItem';
    import { EventBus } from '../EventBus';

    export default {
        props: {
            category: {
                type: Object,
                required: true
            },
            item: {
                type: Object,
                required: true
            }
        },
        data: () => ({
            filters: [],
            items: [],
            hideColumn: false
        }),
        methods: {
            findItem(row) {
                return this.item.rows.find(i => i.parentId == row.id);
            },
            filter() {
                if (this.filters.length === 0)
                    return this.hideColumn = false;

                let match = false;

                match = this.item.rows.some(i => this.filterDown(i));

                if (match)
                    return this.hideColumn = false;

                return this.hideColumn = true;
            },
            filterDown(item) {
                return this.filters.find(f => 
                {
                    if (item.parentId === f)
                        return item.isChecked;

                    return f === item.id;
                });
            }
        },
        mounted() {
            EventBus.$on('applyFilters', filters => {
                this.filters = filters;
                this.filter();
            });
        },
        components: {
            PanelItem
        }
    }
</script>