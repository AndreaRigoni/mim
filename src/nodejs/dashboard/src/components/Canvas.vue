<template>  
  <div id="canvas">
    <!-- <img src="../assets/logo.png"> -->
    <h2>{{ msg }}</h2>    
    <br>
    <div id="Div1" style=" overflow:scroll; "></div>
  </div>
</template>

<script>

import SVG from 'svg.js'
import draggable from 'svg.draggable.js'
import panzoom from 'svg.panzoom.js'



export default {
  name: 'canvas',
  mounted() {
    var draw = SVG('Div1').size(2600,800).panZoom();    
    var rect1 = draw.rect(100,100).attr({ x: 100, y: 100, fill: '#aaa' });
    var rect2 = draw.rect(100,100).attr({ x: 0, y: 0, fill: '#bbb' });
    rect1.draggable();
    rect2.draggable();
    

    var nested = draw.nested()
    // var rect = nested.rect(90, 90).attr({ x: 0, y: 0, fill: '#999'})
    nested.svg('<path class="arrow" d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z" transform=" translate(15,0)">').attr({fill: '#22a'});
    nested.draggable();
    
    var foreign = draw.nested()
    foreign.svg('<foreignobject class="node" x="46" y="22" width="100" height="50">  \
                 <div class="node1">I\'m a div inside a SVG.</div>   \
                 </foreignobject>')
    foreign.draggable()

    var btnel  = document.createElement('button').fill('#ff0000');
    var button = SVG.adopt(document.getElementById('button'));
    button.draggable();
    
 
    console.log(svg);
     
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js Mim canvas',
      progressValue: 50
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#rect1 {
    margin: 1 10px;
    border-width: 1px;
    border-style: dashed;
    border-color: black;
}

.node1 {
    color: #ff0000;
    margin: 1 10px;
    border-width: 1px;
    border-style: dashed;
    border-color: black;
}

</style>
