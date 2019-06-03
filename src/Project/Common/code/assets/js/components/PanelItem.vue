<template>
    <div :class="`grid-table-cell ${cellClass}`">{{ item.value }}</div>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                required: true
            }
        },
        computed: {
            cellClass() {
                if (this.item.value)
                    return;

                return this.item.isChecked ? "service-provided" : "service-not-provided";
            }
        }
    }
</script>