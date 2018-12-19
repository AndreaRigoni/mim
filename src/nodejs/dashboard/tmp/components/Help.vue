<template>
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="true">
      <v-card style="height:100vh;">
        <v-toolbar dark class="primary">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Feedback</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="dialog = false">Send
              <v-icon right dark>send</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card><v-card-text>EmpireForce is created by the community. Join its creation by sending us Your ideas or opinion. Mark our game.</v-card-text></v-card>
          <v-subheader>Write some ideas here.</v-subheader>
             <v-text-field
              name="input-7-1"
              label="Ideas"
              textarea
            ></v-text-field>
          <v-subheader>Write opinion here.</v-subheader>
             <v-text-field
              name="input-7-1"
              label="Opinion"
              textarea
            ></v-text-field>
           
          <v-subheader>Give us your mark.</v-subheader>
            <div>
             <star-rating :show-rating="false" v-model="rate"></star-rating>
             <v-text-field style="border: none!important;"v-if="rate !== 5"
              name="input-7-1"
              label="Why not 5?"
              textarea
              placeholder="Write what to improve!"
            ></v-text-field>
            </div>
      </v-card>
    </v-dialog>
</template>
<script>
import StarRating from 'vue-star-rating'
export default {
  components: { 'star-rating': StarRating },
  data () {
    return {
      dialog: true,
      rate: 5
    }
  }
}
</script>
<style>
::-webkit-scrollbar {
    display: none;
}
  #e3, #e3 .container {
    min-height: 700px;
    overflow: hidden;
    z-index: 0;
  }
.list__tile {
  height: auto!important;
  width: 100%;
}
textarea {
  border: none!important;
}
</style>