<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i" >
          <v-list-tile-action> <v-icon v-html="item.icon"></v-icon> </v-list-tile-action>
          <v-list-tile-content> <v-list-tile-title v-text="item.title"></v-list-tile-title> </v-list-tile-content>
        </v-list-tile>
        <v-list-item>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
      <!-- <HelloWorld/> -->
      <Canvas/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; Mildstone Mim 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import Canvas from './components/Canvas'
import Settings from './components/Settings'

export default {
  name: 'App',
  components: {
    Canvas
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'bubble_chart', title: 'Mim pages' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Mim dashboard'
    }
  }
}
</script>