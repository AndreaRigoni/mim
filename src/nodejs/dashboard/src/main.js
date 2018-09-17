import Vue from 'vue'
import VueUi from '@vue/ui'
import '@vue/ui/dist/vue-ui.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuex from "vuex";
import styler from "stylerjs";

import VueRouter from "vue-router";
import { VueHammer } from "vue2-hammer";


import App from './App.vue' 
import _Canvas from './components/Canvas.vue' 
import _Settings from './components/Settings.vue' 




Vue.use(Vuetify)
Vue.use(VueUi)
Vue.use(VueHammer);
Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    dark: false,
    left: false,
    items: [{ title: "aaa" }],
    show: false,
    right: false,
    color: "orange",
    colorRGB: styler("#toolbar").get(["background-color"])["background-color"],
    colorText: "orange--text",
    colorTextBox: "orange--textbox",
    e1: 2
  },
  mutations: {
    drawerStateSet(state, value) {
      state.left = value;
    },
    colorSet(state, data) {
      state.color = data.colorName;
      state.colorRGB = data.colorValue;
      state.colorText = data.colorName + "--text";
      state.colorTextBox = data.colorName + "--textbox";
    },
    themeSet(state) {
      state.dark = !state.dark;
    }
  }
});

const routes = [
  { path: "/", redirect: "/canvas" },
  { path: "/canvas", components: { default: _Canvas }, name: "Canvas" },
  { path: "/settings", components: { default: _Settings }, name: "Settings" }
];

const router = new VueRouter({
  routes
});


new Vue({
  store,
  router: router,
  el: '#app',
  render: h => h(App)
})
