<template>
    <main>
      <v-container fluid grid-list-md style="position: relative;">
    <v-dialog v-model="QRdialog" width="50vh">
      <v-btn  dark icon slot="activator" class="qrbtn"><v-icon x-large>mdi-qrcode-scan</v-icon></v-btn>
      <v-card id="qrcard" :class="color">
 <div style="width: 50vh; height:50vh; display: flex;
 justify-content: center;
 align-items: center;">
        <canvas id="qrcode" style="width: 40vh; height:40vh;"></canvas>
        </div>
      </v-card>
    </v-dialog>
        <div style="
        position: relative;
 margin-top: -30vh;
display: flex;
 justify-content: center;
 align-items: center;"> 
<img src="https://ssl.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png" style="width: 40vh; height: 40vh" />
</div>
 <div style="
 position: relative;
 margin-top: -15vh;
 display: flex;
  justify-content: center;
  align-items: center;" > 
          <div class="image-cropper">
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1200px-Flag_of_Poland.svg.png" class="rounded" />
</div>
</div>
<v-layout row wrap>
<v-flex xs12 md6>
      <v-card style="margin-top: 8px;">
        <v-card-title primary-title>
          <div>
            <h3 class="display-1 mb-0" :class="colorText">Cool empire nickname</h3>
            <div class="headline">Some basic data:</div>
          </div>
        </v-card-title>
        <v-card-text class="title">
          <p>Full name: Admin Empire;</p>
          <p>Territory: ∞ km²; </p>
          <p>Budget: ∞ $; </p>
          <p>Your function: Emperor; </p>
          <p>Members: only-pro; </p>
        </v-card-text>
      </v-card>
      </v-flex>
      <v-flex xs12 md6>
      <v-card style="margin-top: 8px;">
        <v-card-title primary-title>
          <div>
            <div class="headline">Short description</div>
          </div>
        </v-card-title>
      </v-card>
      </v-flex>
      </v-layout>
      </v-container>
    </main>
</template>
<script>
import { mapState } from 'vuex'
import Drawer from './Drawer.vue';
import QRious from 'qrious'
export default {
  data: () => ({
    QRdialog: false
  }),
  methods: {
    setState: function (msg) {
      this.left = msg
    },
    toggleDialog: function(){
      this.QRdialog = !this.QRdialog
    }
  },
  computed: mapState([
  'dark', 'color', 'colorText'
]), 
  mounted () {
    const qr = new QRious({
          element: document.getElementById('qrcode'),
          value: 'https://www.facebook.com/EmpireForceGAME/'
        });
    qr.backgroundAlpha = 0;
    if(this.dark === true){
      qr.foreground = "#423F3A"
    }else{
      qr.foreground = "white";
    }
    qr.size = 400;
  },
}
</script>
<style>
.qrbtn {
  position: absolute!important;
  z-index: 1;
  margin-top: -30vh;
  width: 10vh;
  height: 10vh;
}
.image-cropper {
    width: 20vh;
    height: 20vh;
    position: relative;
    overflow: hidden;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    border:12px double white;
}
.application > main > .container{
  overflow: visible;
  min-height: 0px!important;
}
img {
    display: inline;
    margin: 0 auto;
    height: 100%;
    width: auto;
}
::-webkit-scrollbar {
    display: none;
}

</style>
