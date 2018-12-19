<template>
  <v-navigation-drawer
    persistent
    height="100%"
    enable-resize-watcher
    v-model="left"
    dense fixed clipped-left
    :mini-variant.sync="mini"
    v-on:input="mainDrawerOpened"
    v-on:input.passive.once="drawerOpen"
    app
  >
  <v-list dense>
    <div class="hidden-sm-and-down">
     <v-list-tile v-if="mini">
              <v-list-tile-action>
                <v-btn icon @click.native.stop="handleMiniChange">
                <v-icon >mdi-chevron-right</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile v-else>
              <v-spacer></v-spacer>
              <v-btn icon @click.native.stop="handleMiniChange">
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-list-tile>
            </div>
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
        <v-dialog v-else-if="item.text === 'Send feedback'" style="width: 100%;"v-model="feedback" fullscreen transition="dialog-bottom-transition" scrollable :overlay="true">
  <v-list-tile slot="activator" @click="left = false">
          <v-list-tile-action>
            <v-icon :class="colorText">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
  <v-card style="height:100vh;">
    <v-toolbar :dark="true" :class="color">
      <v-btn icon @click.native="feedback = false" dark>
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Feedback</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark flat @click.native="feedback = false">Send
          <v-icon right dark>mdi-send</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-card-text>EmpireForce is created by the community. Join its creation by sending us Your ideas or opinion. Mark our game.</v-card-text>
      <v-subheader>Write some ideas here.</v-subheader>
         <v-text-field
          :color="color"
          name="input-7-1"
          label="Ideas"
          box
          multi-line
        ></v-text-field>
      <v-subheader>Write opinion here.</v-subheader>
         <v-text-field
          :color="color"
          label="Opinion"
          box
          multi-line
        ></v-text-field>
       
      <v-subheader>Give us your mark.</v-subheader>
        <div>
         <star-rating :active-color='colorRGB' :show-rating="false" v-model="rate"></star-rating>
         <v-text-field 
          v-if="rate !== 5"
          :color="color"
          label="Why not 5? Write what to improve!"
          box
          multi-line
        ></v-text-field>
        </div>
  </v-card>
</v-dialog>

<v-dialog v-else-if="item.text = 'Help'" style="width: 100%;" v-model="help" fullscreen transition="dialog-bottom-transition" :overlay="false">
  <v-list-tile slot="activator" @click="left = false">
          <v-list-tile-action>
            <v-icon :class="colorText">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
  <v-card style="height:100vh;">
    <v-toolbar :dark="true" :class="color">
      <v-btn icon @click.native="help = false" dark>
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Help</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card>
      <div v-for="list in helpLists">
        <v-list two-line ssubheader>
          <v-subheader>{{list.header}}</v-subheader>
          <v-list-tile avatar v-for="item in list.content" :key="item.text" @click.stop="if(item.event === 'feedback'){help = false; feedback= true}">
            <v-list-tile-avatar>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{item.title}}</v-list-tile-title>
              <v-list-tile-sub-title>{{item.subtitle}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider v-if="list.divider"></v-divider>
        </v-list>
      </div>
      </v-card>
  </v-card>
</v-dialog>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapState } from 'vuex';
import StarRating from 'vue-star-rating';
export default {
  components: {
    'star-rating': StarRating
  },
  data: () => ({
    mini: false,
    feedback: false,
    help: false,
    rate: 5,
    items: [
      { icon: 'fa-empire', text: 'Fraction' , link: '#/fraction'},
      { icon: 'fa-dot-circle-o', text: 'Control Centre' , link: '#/control'},
      { icon: 'fa-building', text: 'Buildings Constructor' , link: '#/buildings'},
      { icon: 'mdi-robot', text: 'Mechs Builder' , link: '#/mechs'},
      { icon: 'mdi-image-filter-drama', text: 'Online gallery' , link: '#/gallery'},
      { icon: 'mdi-settings', text: 'Settings' , link: '#/settings'},
      { icon: 'mdi-message-alert', text: 'Send feedback', type: 'btn'},
      { icon: 'mdi-help-circle', text: 'Help' , type: 'btn'}
    ],
    helpLists: [
      {header: 'Contact us',
      content:[
          { icon: 'mdi-email', title: 'EmpireForce support email', subtitle: 'email'},
          { icon: 'mdi-message-alert', title: 'Send feedback', event: 'feedback'}
      ],
      divider: true},
      {header: 'General',
      content:[
          { icon: 'mdi-play-circle', title: 'Getting started'},
          { icon: 'mdi-forum', title: 'Ask on forum'}
      ]},
        ]
  }),
  computed: {
    left:{
        get(){ return this.$store.state.left; },
        set( value ){ this.$store.commit("drawerStateSet", value );}
    },
    ...mapState([
  'colorText', 'color', 'colorTextBox', 'colorRGB'
])},
  methods: {
    drawerOpen: function (msg) {
      this.$store.commit('drawerStateSet', msg)
    },
    mainDrawerOpened: function(){
          console.log(1)
          window.dispatchEvent(new Event('mainDrawerOpened'));
      },
      handleMiniChange: function(){
        this.mini = !this.mini;
        window.dispatchEvent(new Event('handleMiniChange'));
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


