<template>
  <fragment v-if="!filter.isCheckbox">
    <div class="filter__item" v-for="prop in filter.props">      
      <input type="checkbox" :id="`filter-prop-${prop.id}`">
      <label :for="`filter-prop-${prop.id}`" @click="checkValue(prop.id)">{{ prop.value }}</label>
    </div>
  </fragment>
  <fragment v-else>
    <div class="filter__item">      
      <input type="checkbox" :id="`filter-prop-${filter.id}`" />
      <label :for="`filter-prop-${filter.id}`" @click="checkValue(filter.id)">{{ filter.title }}</label>
    </div>
  </fragment>
</template>

<script> 
  export default {
    props: {
      checked: {
        type: Array
      },
      filter: {
        type: Object,
        required: true
      }
    },
    model: {
      prop: 'checked',
      event: 'input'
    },
    methods: {
      checkValue(value) {          
        if (this.checked.includes(value)) {
          this.checked.splice(this.checked.indexOf(value), 1)
        } else {
          this.checked.push(value)
        }

        this.tableHeightEqualizer();
        this.$emit('apply');
      },
      tableHeightEqualizer() {
        $(".grid-table-cell").attr("style", "");

        $(".program-grid").each(function () {
          const grid = $(this);
          const howmany = $(this).find(".program-attributes .grid-table-cell").length;

          //CUT EXPANDED TABLE WIDTH IN CASE OF 2 COLUMNS
          if ($(window).width() >= 1024)
            if ($(grid).hasClass("program-grid-2"))
              $(grid).parent().css({ "width": "800px", "overflow": "hidden" });
            else
              if ($(grid).hasClass("program-grid-1"))
                $(grid).parent().css({ "width": "520px", "overflow": "hidden" });

          for (let i = 0; i < howmany; i++) {
            let max = 0;

            //FIND THE MAX PER ROW
            $(grid).find(".grid-table-column").each(function () {
              $(this).find(".grid-table-cell").eq(i).each(function () {
                if ($(this).height() > max)
                  max = $(this).outerHeight();
              });

              //SET FIXED HEIGHT
              setTimeout(() => { $(this).find(".grid-table-cell").eq(i).height(max + "px"); }, 500);
            });
          }
        });
      }
    }
  }
</script>