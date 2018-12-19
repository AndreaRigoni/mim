<template>
  <v-app :dark="this.$store.state.dark">
    
    <!--  DRAWER   -->
    
    <!-- <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <template v-for="(item, i) in items">
        <v-list-tile v-if="item.type !== 'btn'" :href="item.link">
          <v-list-tile-action>
            <v-icon :class="colorText">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer> -->

    <Drawer/>
    <!--  TOOLBAR   -->
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <router-view transition="slide-x-transition"></router-view>
      <!-- <Canvas/> -->
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; Mildstone Mim 2018</span>
    </v-footer>
  </v-app>
</template>





<script>
// import Canvas from './components/Canvas'
// import Settings from './components/Settings'
// import MimInstanceTree from './components/MimInstanceTree'
import Drawer from './components/Drawer'

export default {
  name: 'App',
  components: {
    Drawer
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      title: 'Mim dashboard'
    }
  }
}
</script>








<style>
.red--textbox textarea {
  caret-color: #F44336!important
}
.red--textbox label {
  color: #F44336!important;
}
.pink--textbox textarea {
  caret-color: #E91E63!important
}
.pink--textbox label {
  color: #E91E63!important;
}
.purple--textbox textarea {
  caret-color: #9C27B0!important
}
.purple--textbox label {
  color: #9C27B0!important;
}
.deep-purple--textbox textarea {
  caret-color: #673AB7!important
}
.deep-purple--textbox label {
  color: #673AB7!important;
}
.indigo--textbox textarea {
  caret-color: #3F51B5!important
}
.indigo--textbox label {
  color: #3F51B5!important;
}
.blue--textbox textarea {
  caret-color: #2196F3!important
}
.blue--textbox label {
  color: #2196F3!important;
}
.light-blue--textbox textarea {
  caret-color: #03A9F4!important
}
.light-blue--textbox label {
  color: #03A9F4!important;
}
.cyan--textbox textarea {
  caret-color: #00BCD4!important
}
.cyan--textbox label {
  color: #00BCD4!important;
}
.teal--textbox textarea {
  caret-color: #009688!important
}
.teal--textbox label {
  color: #009688!important;
}
.green--textbox textarea {
  caret-color: #4CAF50!important
}
.green--textbox label {
  color: #4CAF50!important;
}
.light-green--textbox textarea {
  caret-color: #8BC34A!important
}
.light-green--textbox label {
  color: #8BC34A!important;
}
.lime--textbox textarea {
  caret-color: #CDDC39!important
}
.lime--textbox label {
  color: #CDDC39!important;
}
.yellow--textbox textarea {
  caret-color: #FFEB3B!important
}
.yellow--textbox label {
  color: #FFEB3B!important;
}
.amber--textbox textarea {
  caret-color: #FFC107!important
}
.amber--textbox label {
  color: #FFC107!important;
}
.orange--textbox textarea {
  caret-color: #FF9800!important
}
.orange--textbox label {
  color: #FF9800!important;
}
.deep-orange--textbox textarea {
  caret-color: #FF5722!important
}
.deep-orange--textbox label {
  color: #FF5722!important;
}
.brown--textbox textarea {
  caret-color: #795548!important
}
.brown--textbox label {
  color: #795548!important;
}
.blue-grey--textbox textarea {
  caret-color: #607D8B!important
}
.blue-grey--textbox label {
  color: #607D8B!important;
}
.grey--textbox textarea {
  caret-color: #9E9E9E!important
}
.grey--textbox label {
  color: #9E9E9E!important;
}
</style>
