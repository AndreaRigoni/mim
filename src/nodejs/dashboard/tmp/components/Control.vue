<template>
<div style="width: 100%; height: 100vh; min-height: 100vh;">
   <div id="contain" style="width: 100%; height: 100vh; min-height: 100vh; display:flex;justify-content:center;align-items:center;">
    <v-subheader>This is the place where you control your units in battle, see your empire and upgrade it. For a preview see backround image of EmpireForceGame site on Facebook.</v-subheader>
   </div>
</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data: () => ({     
  }),
    computed: mapState([
        'colorRGB', 'dark'
      ])
}
</script>
<style>
::-webkit-scrollbar {
    display: none;
}
  #e3 .input-group__details:after {
    background-color: rgba(255,255,255,0.32) !important;
  }
  #e3 .input-group--focused .input-group__append-icon {
    color: inherit !important;
  }

</style>
