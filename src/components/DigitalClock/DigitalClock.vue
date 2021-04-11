<template>
  <div class="clock">
    <div class="display">
      <number-panel :number="hours2" />
      <number-panel :number="hours1" />
      <separation />
      <number-panel :number="minutes2" />
      <number-panel :number="minutes1" />
      <separation />
      <number-panel :number="seconds2" />
      <number-panel :number="seconds1" />
    </div>
  </div>
</template>

<script>
import NumberPanel from "./NumberPanel";
import Separation from "./Separation";
import moment from "moment";

export default {
  components: {
    NumberPanel,
    Separation,
  },

  data() {
    return {
      time: undefined,
      intervalId: undefined,
    };
  },

  methods: {
    setTime() {
      this.intervalId = setInterval(() => {
        this.time = new Date();
      }, 1000);
    },
  },

  mounted() {
    this.setTime();
  },

  beforeDestroy() {
    clearInterval(this.intervalId);
  },

  computed: {
    hours1() {
      return moment(this.time).format("HH") % 10;
    },

    hours2() {
      return Math.floor(moment(this.time).format("HH") / 10);
    },

    minutes1() {
      return moment(this.time).format("mm") % 10;
    },

    minutes2() {
      return Math.floor(moment(this.time).format("mm") / 10);
    },

    seconds1() {
      return moment(this.time).format("ss") % 10;
    },

    seconds2() {
      return Math.floor(moment(this.time).format("ss") / 10);
    },
  },
};
</script>

<style scoped>
.clock {
  background-color: #111;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.6));
  position: absolute;
  top: 50px;
  right: 20px;
  padding: 20px;
  width: 615px;
  transform: scale(0.75);
}

.display {
  background-color: #222;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 600px;
}
</style>
