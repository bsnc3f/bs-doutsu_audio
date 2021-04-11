<template>
  <div class="number-panel">
    <light-stick type="horizontal" class="stick stick1" ref="stick1" />
    <light-stick type="vertical" class="stick stick2" ref="stick2" />
    <light-stick type="vertical" class="stick stick3" ref="stick3" />
    <light-stick type="horizontal" class="stick stick4" ref="stick4" />
    <light-stick type="vertical" class="stick stick5" ref="stick5" />
    <light-stick type="vertical" class="stick stick6" ref="stick6" />
    <light-stick type="horizontal" class="stick stick7" ref="stick7" />
  </div>
</template>

<script>
import LightStick from "./LightStick";

export default {
  components: {
    LightStick,
  },

  props: {
    number: 0,
  },

  watch: {
    number() {
      //numberの変更とともに表示
      this.display();
    },
  },

  mounted() {
    //初期表示設定
    this.display();
  },

  methods: {
    display() {
      switch (this.number) {
        case 0:
          this.zero();
          break;
        case 1:
          this.one();
          break;
        case 2:
          this.two();
          break;
        case 3:
          this.three();
          break;
        case 4:
          this.four();
          break;
        case 5:
          this.five();
          break;
        case 6:
          this.six();
          break;
        case 7:
          this.seven();
          break;
        case 8:
          this.eight();
          break;
        case 9:
          this.nine();
          break;
      }
    },

    clear() {
      this.$refs.stick1.off(); //子コンポーネントのメソッド呼び出しにはref属性を使用
      this.$refs.stick2.off();
      this.$refs.stick3.off();
      this.$refs.stick4.off();
      this.$refs.stick5.off();
      this.$refs.stick6.off();
      this.$refs.stick7.off();
    },

    one() {
      this.clear();
      this.$refs.stick3.on();
      this.$refs.stick6.on();
    },

    two() {
      this.clear();
      this.$refs.stick1.on();
      this.$refs.stick3.on();
      this.$refs.stick4.on();
      this.$refs.stick5.on();
      this.$refs.stick7.on();
    },

    three() {
      this.clear();
      this.$refs.stick1.on();
      this.$refs.stick3.on();
      this.$refs.stick4.on();
      this.$refs.stick6.on();
      this.$refs.stick7.on();
    },

    four() {
      this.clear();
      this.$refs.stick2.on();
      this.$refs.stick3.on();
      this.$refs.stick4.on();
      this.$refs.stick6.on();
    },

    five() {
      this.clear();
      this.$refs.stick1.on();
      this.$refs.stick2.on();
      this.$refs.stick4.on();
      this.$refs.stick6.on();
      this.$refs.stick7.on();
    },

    six() {
      this.clear();
      this.$refs.stick1.on();
      this.$refs.stick2.on();
      this.$refs.stick4.on();
      this.$refs.stick5.on();
      this.$refs.stick6.on();
      this.$refs.stick7.on();
    },

    seven() {
      this.clear();
      this.$refs.stick1.on();
      this.$refs.stick3.on();
      this.$refs.stick6.on();
    },

    eight() {
      this.clear();
      this.$refs.stick1.on();
      this.$refs.stick2.on();
      this.$refs.stick3.on();
      this.$refs.stick4.on();
      this.$refs.stick5.on();
      this.$refs.stick6.on();
      this.$refs.stick7.on();
    },

    nine() {
      this.clear();
      this.$refs.stick1.on();
      this.$refs.stick2.on();
      this.$refs.stick3.on();
      this.$refs.stick4.on();
      this.$refs.stick6.on();
      this.$refs.stick7.on();
    },

    zero() {
      this.clear();
      this.$refs.stick1.on();
      this.$refs.stick2.on();
      this.$refs.stick3.on();
      this.$refs.stick5.on();
      this.$refs.stick6.on();
      this.$refs.stick7.on();
    },
  },
};
</script>

<style scoped>
.number-panel {
  background-color: #222;
  position: relative;
  height: 130px;
  width: 70px;
}

.stick {
  position: absolute;
}

.stick1 {
  top: 0;
  left: 10px;
}

.stick2 {
  top: 10px;
  left: 0;
}

.stick3 {
  top: 10px;
  left: 60px;
}

.stick4 {
  top: 60px;
  left: 10px;
}

.stick5 {
  top: 70px;
  left: 0;
}

.stick6 {
  top: 70px;
  left: 60px;
}

.stick7 {
  top: 120px;
  left: 10px;
}
</style>
