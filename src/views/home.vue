
<template>
  <div id="app">

  </div>
</template>

<script>
// import AnalogClock from "../components/AnalogClock.vue";
// import DigitalClock from "../components/DigitalClock/DigitalClock.vue";

import moment from "vue-moment";

// import axios from "../components/axios.vue";

// import AudioMotion from "../components/audioMotion/AudioMotion.vue";
// import AudioMotionAnalyzer from "audiomotion-analyzer";

export default {
  name: "app",
  moment,
  components: {

  },
  data() {
    return {

    };
  },
  mounted() {

  },
  methods: {

  },
  computed: {

  },

  // destroyed() {}, // デストロイ
  // deactivated() {}, // keep-alive使用時、動的コンポーネントが切り替わり、表示される前
  // activated() {}, // keep-alive使用時、動的コンポーネントが表示される時
};
</script>


<style scoped>
#app {
  position: fixed;
  width: 100%;
  height: 100%;
}

</style>
