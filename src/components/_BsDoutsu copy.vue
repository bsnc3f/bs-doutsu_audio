<template>
  <div id="app">
    <div id="header">BSNC 放送タリー</div>
    <div id="Clock">
      <digital-clock />
    <button v-on:click="toggle_switch()">FU ON</button>
    <button v-on:click="fullscreenSwitch()">Full Screen</button>
    <button v-on:click="exitFullscreen()">Exit FullScreen</button>
    <p>{{ FU1_1 }}</p>

    </div>
    <p class="boothIndex">ブース１</p>
    <div id="doutu1Col">
      <div class="videoCol" v-bind:class="{ fuOn: FU1_1 }">
      <span class="caption1">同通１_１</span>
      <div id="cam01" class="inVideo">
        <iframe
          width="640px"
          height="480px"
          src="http://192.168.0.33/nphMotionJpeg?Resolution=640x480&Quality=motionHTTP/1.0¥r¥n"
          id="iframe1"
        >
        </iframe>
        <p>{{ FU1_1 }}</p>
      </div>
      </div>
      <div class="videoCol" v-bind:class="{ fuOn: FU1_2 }">
      <span class="caption1">同通１_２</span>
      <div id="cam02" class="inVideo">
        <iframe
          width="640px"
          height="480px"
          src="http://192.168.0.33/nphMotionJpeg?Resolution=640x480&Quality=StandardHTTP/1.0¥r¥n"
          id="iframe2"
        >
        </iframe>
        <p>{{ FU1_2 }}</p>
      </div>
      </div>
      <div class="videoCol" v-bind:class="{ fuOn: FU1_3 }">
      <span class="caption1">同通１_３</span>
      <div id="cam03" class="inVideo">
        <iframe
          width="640px"
          height="480px"
          src="http://192.168.0.33/nphMotionJpeg?Resolution=640x480&Quality=StandardHTTP/1.0¥r¥n"
          id="iframe3"
        >
        </iframe>
        <p>{{ FU1_3 }}</p>
      </div>
      </div>
      <div class="videoCol" v-bind:class="{ fuOn: FU1_4 }">
        <span class="caption1">同通１_４</span>
      <div id="cam04" class="inVideo">
        <iframe
          width="640px"
          height="480px"
          src="http://192.168.0.33/nphMotionJpeg?Resolution=640x480&Quality=StandardHTTP/1.0¥r¥n"
          id="iframe4"
        >
        </iframe>
        <p>{{ FU1_4 }}</p>
      </div>
      </div>
    </div>

    <div id="doutu2Col">
    <p class="boothIndex2">ブース2</p>
      <div class="videoCol2" v-bind:class="{ fuOn2: FU2_1 }">
        <span class="caption2">同通２_１</span>
      <div id="cam05" class="inVideo2">
        <iframe
          width="340px"
          height="260px"
          src="http://192.168.0.33/nphMotionJpeg?Resolution=640x480&Quality=motionHTTP/1.0¥r¥n"
          id="iframe1"
        >
        </iframe>
        <p>{{ FU2_1 }}</p>
      </div>
      </div>
      <div class="videoCol2" v-bind:class="{ fuOn2: FU2_2 }">
        <span class="caption2">同通２_２</span>
      <div id="cam06" class="inVideo2">
        <iframe
          width="340px"
          height="260px"
          src="http://192.168.0.33/nphMotionJpeg?Resolution=640x480&Quality=motionHTTP/1.0¥r¥n"
          id="iframe1"
        >
        </iframe>
        <p>{{ FU2_2 }}</p>
      </div>
      </div>
      <div class="videoCol2" v-bind:class="{ fuOn2: FU2_3 }">
        <span class="caption2">同通２_３</span>
      <div id="cam07" class="inVideo2">
        <iframe
          width="340px"
          height="260px"
          src="http://192.168.0.33/nphMotionJpeg?Resolution=640x480&Quality=motionHTTP/1.0¥r¥n"
          id="iframe1"
        >
        </iframe>
        <p>{{ FU2_3 }}</p>
      </div>
      </div>
      <div class="videoCol2" v-bind:class="{ fuOn2: FU2_4 }">
        <span class="caption2">同通２_４</span>
      <div id="cam08" class="inVideo2">
        <iframe
          width="340px"
          height="260px"
          src="http://192.168.0.33/nphMotionJpeg?Resolution=640x480&Quality=motionHTTP/1.0¥r¥n"
          id="iframe1"
        >
        </iframe>
        <p>{{ FU2_4 }}</p>
      </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      FU1_1: false,
      FU1_2: true,
      FU1_3: false,
      FU1_4: false,
      FU2_1: true,
      FU2_2: false,
      FU2_3: true,
      FU2_4: false,
    };
  },
  watch: {
    // FU1_1: function (val) {nc
    //   console.log("FU1_1 is " + this.FU1_1);
    // },
    // FU1_2: function (val) {
    //   console.log("FU1_2 is " + this.FU1_2);
    // },
  },
  methods: {
    toggle_switch: function () {
      this.FU1_1 = !this.FU1_1;
    },
    fullscreenSwitch() {
      document.getElementById("app").webkitRequestFullscreen();
    },
    exitFullscreen() {
      document.exitFullscreen();
    },
  },
  computed: {},
};
</script>

<style scoped>
html {
  margin: 0;
  font-size: 62.5%;
  font-family: sans-serif;
  background-color: #111;
  background-size: cover;
  background-position: center;
}

body {
  margin: 0;
  padding: 0;
  height: 1080px;
  background-color: #111;
  background-size: cover;
  background-position: center;
}

#app::-webkit-scrollbar {
  display: none;
}

*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

#app {
  display: fixed;
  width: 100%;
  height: 100vh;
  margin: 20px 0 10px 0;
  background-color: #111;
}
#app iframe {
  border: none;
}

#header {
  display: block;
  width: 90vw;
  height: 50px;
  margin: 0 auto;
  border: 1px solid #222;
  text-align: center;
  background-color: rgb(204, 10, 10);
}
#Clock {
  width: 90vw;
  height: 150px;
  margin: 0 auto;
  border: 1px solid #666;
  text-align: center;
}

.boothIndex {
  display: block;
  position: relative;
  left: 20px;
  top: 0px;
  width: 200px;
  height: 35px;
  margin: 5px 20px;
  font-size: 1.5rem;
  background-color: rgb(128, 204, 204);
  color: #111;
  border: 1px solid #666;
}

.boothIndex2 {
  display: block;
  width: 160px;
  height: 32px;
  margin: 5px 20px;
  float: left;
  font-size: 1.4rem;
  background-color: rgb(128, 204, 204);
  color: #111;
  border: 1px solid #666;
}

@media print, (min-width: 600px) {
  #doutu1Col {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-items: flex-start;
    width: 97vw;
    height: 390px;
    margin: 0 auto;
    padding: 0;
    border: 1px solid #666;
  }
    .videoCol {
    width: 680px;
    height: 550px;
    transform: scale(0.68);
    margin: -80px -105px;
    box-sizing: border-box;
    border: 1px solid #666;
  }

    .videoCol.fuOn {
    width: 680px;
    height: 550x;
    transform: scale(0.68);
    margin: -80px -105px;
    border: 1px solid #666;
    background-color:rgb(204, 10, 10) ;
  }

    .inVideo {
    position: relative;
    width: 96%;
    height: 90%;
    /* width: 646px;
    height: 100%; */
    top: 20px;
    left: 14px;
    transform: scale(1);
    padding: 0;
    border: 3px solid blue;
  }
  #doutu2Col {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 97vw;
    height: 330px;
    margin: 10px auto;
    border: 1px solid #666;
  }
  .videoCol2 {
    width: 380px;
    height: 300px;
    transform: scale(1);
    margin: 5px 10px;
    box-sizing: border-box;
    border: 1px solid #666;
  }
}
  .videoCol2.fuOn2 {

    width: 380px;
    height: 300px;
    transform: scale(1);
    margin: 5px 10px;
    box-sizing: border-box;
    /* border: 1px solid #666; */
    background-color:rgb(204, 10, 10) ;
  }

    .inVideo2 {
    position: relative;
    width: 96%;
    height: 90%;
    /* width: 646px;
    height: 100%; */
    top: 15px;
    left: 7px;
    transform: scale(1);
    padding: 0;
    /* border: 3px solid blue; */
  }

@media print, (max-width: 1400px) {
  .videoCol {
    border: 1px solid rgb(20, 28, 228);
  }
}


/* .fuOn {
  border: 10px solid rgb(171, 19, 19);
} */
.caption1 {
  display: block;
  position: absolute;
  margin: 2px;
  top: 0px;
  left: 150px;
  width: 320px;
  height: 35px;
  border: 1px solid #666;
  font-size: 1.6rem;
}
.caption2 {
  display: block;
  position: absolute;
  margin: 2px;
  top: 5px;
  left: 75px;
  width: 200px;
  height: 24px;
  border: 1px solid #666;
  font-size: 1rem;
}

#DigitalClock {
  position: absolute;
  top: 150px;
  left: 200px;
}


</style>
