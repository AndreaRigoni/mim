<template>
	<div>
		<div id="three" style="width: 100%; height: 100vh; min-height: 100vh; display:flex;justify-content:center;align-items:center;" >
    <v-subheader>Here you edit and create new buildings. With the add button you can add new buildings blocks to later edit them.</v-subheader>
		</div>
       <v-btn
          id="fab"
          :color="this.color"
          dark
          fab
          fixed
          bottom
          right
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
	</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
  }),
  computed: mapState([
  'dark', 'color', 'colorText'
]), 
}
    



</script>
<style>
::-webkit-scrollbar {
    display: none;
}
</style>