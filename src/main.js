import Vue from "vue";
// import Index from "./components/TaxPrice.vue";
import Index from "./App.vue";
// // router.jsでエクスポートしたrouterを必ずrotuerという名前でインポートしなければならない
// import router from "./route.js";
// import axios from "axios";
// //import moment from "vue-moment";

// import "moment/src/locale/ja";
// import moment from "moment";
// import AudioVisual from "vue-audio-visual";
// Vue.use(AudioVisual);
// import AudioMotionAnalyzer from "audiomotion-analyzer";
// Vue.use(AudioMotionAnalyzer);

// Vue.prototype.$axios = axios;
// // Vue.use(require("vue-moment"));

// Vue.prototype.$moment = moment;
// Vue.filter("LLLL", (date) => moment(date).format("LLLL"));
// Vue.filter("fromNow", (date) => moment(date).fromNow());

// import five from "johnny-five";
// var board = new five.Board();

// JQuery 読み込み
import jQuery from "jquery";
global.jquery = jQuery;
global.$ = jQuery;
window.$ = window.jQuery = require("jquery");

Vue.config.productionTip = false;

// /*
// // 読み込んだvueファイルをグローバルコンポーネントとして登録
// Object.keys(components).forEach(key => {
//   Vue.component(key, components[key]);
// });
// */

new Vue({
  // router,
  // five,
  // board,
  render: (h) => h(Index)
}).$mount("#app");




// Vue 3での記述

// import { createApp } from 'vue';
// import App from "./App2.vue";
// import AudioVisual from "vue-audio-visual";

// const app = createApp(App)
// app.config.productionTip = false;
// app.use(AudioVisual);
// app.mount('#app');



// createApp({
//   // router,
//   render: (h) => h(App)
// }).$mount('#app');


// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
