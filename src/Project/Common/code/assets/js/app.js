import Vue from 'vue';
import Panel from './components/Panel';
import Fragment from 'vue-fragment';

Vue.use(Fragment.Plugin);

Vue.component('app-panel', Panel);

const app = new Vue({
    el: '#app'
});