import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import "../node_modules/vuetify/dist/vuetify.min.css";
import _Control from "./components/Control.vue";
import Vuex from "vuex";
import Drawer from "./components/Drawer.vue";
import StarRating from "vue-star-rating";
import { VueHammer } from "vue2-hammer";
import styler from "stylerjs";
const _Fraction = () => import("./components/Fraction.vue");
const _Buildings = () => import("./components/Buildings.vue");
const _Mechs = () => import("./components/Mechs.vue");
const _Gallery = () => import("./components/Gallery.vue");
const _Settings = () => import("./components/Settings.vue");

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
  { path: "/", redirect: "/control" },
  { path: "/fraction", components: { default: _Fraction }, name: "Fraction" },
  { path: "/control", components: { default: _Control }, name: "EmpireForce" },
  {
    path: "/buildings",
    components: { default: _Buildings },
    name: "Buildings Constructor"
  },
  { path: "/mechs", components: { default: _Mechs }, name: "Mechs builder" },
  {
    path: "/gallery",
    components: { default: _Gallery },
    name: "Designs gallery"
  },
  { path: "/settings", components: { default: _Settings }, name: "Settings" }
];

const router = new VueRouter({
  routes
});
new Vue({
  store,
  router: router,
  el: "#app",
  components: {
    Drawer,
    "star-rating": StarRating
  },
  template: `
  <v-app :dark="this.$store.state.dark">
  <Drawer />
  <v-toolbar fixed :dark="true" :class="this.$store.state.color" app>
  <v-btn icon class="white--text" @click.stop="setState"><v-icon>mdi-menu</v-icon></v-btn>
  <v-toolbar-title class="white--text" style="margin-left: 8px;">{{this.$route.name}}</v-toolbar-title>
  <v-spacer></v-spacer>
</v-toolbar>
<div style="
display: flex;
 justify-content: center;
 align-items: center;" > 
<div v-if="this.$route.name === 'Fraction'":class="this.$store.state.color" style="width: 100%; height: 30vh" />
</div>
<v-content>
  <router-view transition="slide-x-transition"></router-view>
  </v-content>
  </v-app>
  
  `,
  data: () => ({
    dialog: true,
    rate: 5,
    openSide: false
  }),
  methods: {
    setState: function(msg) {
      this.$store.commit("drawerStateSet", !this.$store.state.left);
    }
  }
});
