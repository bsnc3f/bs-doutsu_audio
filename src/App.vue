<template>
  <div id="app">
    <input type="checkbox" v-model="app2">App2
    <input type="checkbox" v-model="app3">App3
    <input type="checkbox" v-model="audio_meter">Audio_Meter
    <input type="checkbox" v-model="audio_motion">Audio_Motion
    <input type="checkbox" v-model="bsdoutsu">BsDoutsu
    <input type="checkbox" v-model="tasks">Tasks
    <input type="checkbox" v-model="taxPrice">TaxPrice
    <input type="checkbox" v-model="inputReplace">InputReplace
    <br>
    <input type="checkbox" v-model="serialTest">SerialTest
    <input type="checkbox" v-model="Comcom">comPort
    <!-- <input type="checkbox" v-model="">Tasks -->
    <AudioMeter v-if="audio_meter" />
    <AudioMotion v-if="audio_motion" />
    <BsDoutsu v-if="bsdoutsu" />
    <Task v-if="tasks" />
    <TaxPrice v-if="taxPrice" />
    <InputReplace v-if="inputReplace" />
    <SerialTest v-if="serialTest" />
    <!-- <Comcom v-if="Comcom"/> -->
  </div>
</template>

<script>
import AudioMotion from './components/AudioMotion.vue';
import BsDoutsu from "./components/BsDoutsu.vue";
import AudioMeter from "./components/AudioMeter.vue";
import InputReplace from "./components/InputReplace.vue";
import Task from "./components/Task.vue";
import TaxPrice from "./components/TaxPrice.vue";
// import DigitalClock from './components/DigitalClock/DigitalClock.vue';
// ============================================
import SerialTest from "./components/SerialTest.vue";
// import Comcom from "./components/comPort.vue";


export default {
  name: "app",
  data() {
    return {
      app2: true,
      app3: true,
      audio_meter: false,
      audio_motion: false,
      bsdoutsu: false,
      inputReplace: false,
      tasks: false,
      taxPrice: false,
      serialTest: false,
      // Comcom: false,
    }
  },
  components: {
    BsDoutsu,
    AudioMeter,
    AudioMotion,
    InputReplace,
    Task,
    TaxPrice,
    SerialTest,
    // Comcom,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
