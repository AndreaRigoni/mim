<template>
    <main>
      <v-container fluid>
          <v-subheader :class="colorText">Apperance</v-subheader>
          <v-card>
              <v-list>
                  <v-list-tile>
              <v-card-text class="text-xs-left">
                  Dark theme
              </v-card-text>
              <v-list-tile-action>
          <v-switch :color="color" v-model="dark" v-on:change="handleThemeChange(dark, $event)"></v-switch>
             </v-list-tile-action>
                  </v-list-tile>
                   <v-divider/>
                  <v-list-tile>
              <v-card-text class="text-xs-left">
                  Change default color
              </v-card-text>
              <v-list-tile-action>
                <v-dialog scrollable width='60vh' v-model="dialog" absolute>
      <v-btn icon ripple slot="activator"><v-icon :class="colorText">mdi-palette</v-icon></v-btn>
      <v-card style="display:flex;justify-content:center;align-items:center;">
        <v-card-title>
        Choose your color
        </v-card-title>
        <v-card-actions style="padding: 3vh;">
            <v-layout column wrap>
                <v-flex v-for="fx in fxs" :key="fx.id">
                <v-btn icon style="border-radius: 50%; width: 6.5vh; height: 6.5vh; margin: 0.5vh;" v-for="col in fx.colors" :key="col.or" :class="col.or" v-on:click.passive="handleColorChoose(col.or, $event)"/>
                </v-flex>
            </v-layout>
      
        </v-card-actions>
      </v-card>
    </v-dialog>
             </v-list-tile-action>
                  </v-list-tile>
              </v-list>
          </v-card>
    </v-container>
    </main>
</template>



<script>
import { mapState } from 'vuex'
import styler from 'stylerjs';
export default {
  data: () => ({
    dialog: false,
    fxs: [
      {id:1, colors: [
          {or: 'red'},
          {or: 'pink'},
          {or: 'purple'},
          {or: 'deep-purple'}
      ]
      },
      {id:2,colors: [
          {or: 'indigo'},
          {or: 'blue'},
          {or: 'light-blue'},
          {or: 'cyan'}
      ]
      },
      {id:3,colors: [
          {or: 'teal'},
          {or: 'green'},
          {or: 'light-green'},
          {or: 'lime'}
      ]
      },
      {id:4,colors: [
          {or: 'yellow'},
          {or: 'amber'},
          {or: 'orange'},
          {or: 'deep-orange'}
      ]
      },
      {id:5,colors: [
          {or: 'brown'},
          {or: 'blue-grey'},
          {or: 'grey'}
      ]
      }
    ]
  }),
  methods: {
    setState: function (msg) {
      this.$store.commit('drawerStateSet', !this.$store.state.left)
    },
    handleColorChoose: function (id, event) {
    const rgb = styler('.' + id).get(['background-color'])['background-color'];
      this.$store.commit('colorSet', {colorName: id, colorValue:rgb})
      this.dialog = false
    },
    handleThemeChange: function (dark, event) {
      this.$store.commit('themeSet')
    }
  },
  computed: mapState([
  'dark', 'color', 'colorText'
])
}
</script>


<style>
@media only screen and (max-width: 599px){
.toolbar .toolbar__content>:not(.btn):last-child, .toolbar .toolbar__extension>:not(.btn):last-child {
    margin-right: 0px!important;
}
}
::-webkit-scrollbar {
    display: none;
}
</style>