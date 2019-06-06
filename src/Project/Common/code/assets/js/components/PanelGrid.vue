<template>
    <div :class="`program-grid ${panelGridClass}`">

        <div class="grid-table-column program-attributes">
            <div class="grid-table-cell"></div>
            <div class="grid-table-cell" v-for="row in category.rows" :key="`panel-row-${row.id}`" >{{ row.title }}</div>
        </div>

        <div class="grid-table-window">
            <div class="grid-table js-grid-table" id="programs-table" :style="`--programCount:${items.length};`">
                <template v-for="item in items">
                    <panel-column :key="`panel-row-item${item.id}`" :category="category" :item="item"></panel-column>
                </template>
            </div>
        </div>

    </div>
</template>

<script>
    import PanelColumn from "./PanelColumn";

    export default {
        props: {
            category: {
                type: Object,
                required: true
            },
            items: {
                type: Array,
                required: true
            }
        },
        computed: {
            panelGridClass() {
                return !this.category.isMain ? "program-grid--subsection" : "";
            }
        },
        components: {
            PanelColumn
        }
    }
</script>