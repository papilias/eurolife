<template>
  <section id="panels-wrapper" class="center center--1100 programs">
    <h1 class="h4 m-b-16 t-c">{{ panelsGroup.title }}</h1>
    <p class="m-b-48 t-c center center--650">
      {{ panelsGroup.summary }}
    </p>

    <button v-for="(panel, i) in panelsGroup.panels"
            @click="changeCurrentPanel(i)"
            :key="`panel-button-${panel.id}`">
      {{ panel.title }}
    </button>

    <transition-group name="slide" tag="div" mode="out-in">
      <app-panel v-for="(panel, i) in panelsGroup.panels" :panel="panel" :key="`panel-${panel.id}`" v-if="currentPanel == i"></app-panel>     
    </transition-group>
  </section>
</template>

<script>
  import { EventBus } from '../EventBus';

  export default {
    props: {
      panelsGroup: {
        type: Object,
        require: true
      }
    },
    data: () => ({
      currentPanel: 0
    }),
    methods: {
      changeCurrentPanel(i) {
        this.currentPanel = i;
        EventBus.$emit("panelChanged", i)
      }
    }
  }
</script>