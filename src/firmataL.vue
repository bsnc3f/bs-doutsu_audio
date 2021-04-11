<template>
  <div id="app">
    <!-- <five />
    <p>johnnyfive</p>
    <button v-on:click="toggle_switch()">LED ON</button> -->

  </div>
</template>

<script>

// const five = require("johnny-five");
// const board = new five.Board();
// // const pin = {
// //   13: {
// //     led: {
// //       on: () => console.log('on'),
// //       off: () => console.log('off')
// //     },
// //   },
// };


export default {
  name: "app",
  data() {
  },
  methods: {
  },
  mounted() {
    const { Board, Led } = require("johnny-five");
    const board = new Board();
    board.on("ready", () => {
    console.log("Connected");
    const led = new Led(13);
    led.blink(500);
  });
  },
};
</script>


<style scoped>
</style>
