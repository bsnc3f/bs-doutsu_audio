<template>
  <div id="app">
    <p>SerialPort Test</p>
  </div>
</template>

<script>
  export default {
    name: "app",
    data() {
      return{

      }
    },
    methods: {
    },
    mounted() {

const SerialPort = require('serialport')
const port = new SerialPort('COM3')

port.write('main screen turn on', function(err) {
  if (err) {
    return console.log('Error on write: ', err.message)
  }
  console.log('message written')
})

// Open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message)
})


    }

  };
</script>


<style scoped>
</style>


