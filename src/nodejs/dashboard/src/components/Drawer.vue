<template>
  
    <!--  DRAWER   -->    
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
    </v-navigation-drawer>

</template>





<script>
import Canvas from './Canvas'
import Settings from './Settings'
import MimInstanceTree from './MimInstanceTree'

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
        { icon: 'dashboard', text: 'Canvas' , link: '#/canvas'},
        { icon: 'list', text: 'MimInstanceTree' , link: '#/instances'},
        { icon: 'settings', text: 'Settings' , link: '#/settings'}
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    }
  }
}
</script>

