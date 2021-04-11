<template>
  <div id="app">
    <five />
    <p>johnnyfive</p>
    <button v-on:click="toggle_switch()">LED ON</button>

  </div>
</template>

<script>
const five = require("johnny-five");
const board = new five.Board({port: 'COM11'});
const pin = {
  13: {
    led: {
      on: () => console.log('on'),
      off: () => console.log('off')
    },
  },
};

// import five from "johnny-five";
// import repl from "repl";
// var led = new five.Led(13);

export default {
  name: "app",
  // five,
  // repl,
  data() {
    return {
    };
  },
  methods: {
    toggle_switch: function () {
      this.led = !this.led;
    }
  },
  mounted() {
  board.on('ready', function() {
  const led = new five.Led(13);
  pin[13].led = led;
  led.blink(300);
});
},

};
</script>


<style scoped>
</style>
