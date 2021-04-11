<template>
  <div id="app">

  </div>
</template>

<script>
import SerialPort from "serialport";

var SerialPort = require("serialport");
// シリアルポート設定 115200bps
var port = new SerialPort("COM8",{ baudRate: 115200 });

export default {
  name: "app",
  data() {
    return {

    };
  },
  mounted: {
  //     // ポートあけた
  //     port.on('open', function() {
  //     console.log('開けたぜ。');

  //     // 送信テスト
  //     port.write("ああ～早く調歩同期まみれになろうぜ。", function(err){
	// if(err){
	// 	  // エラーハンドル
	// 	  return console.log('ああ＾～たまらねえぜ。:', err.message);
	//   }
	//   // 成功
	//   console.log("送ったぜ。");

  //   // 受信待ち
  //   port.on('data', function(data) {
  //     var text = String(data);
  //     console.log(text);
  //   });
	console.log('開けたぜ。'),
    }

};

</script>


<style scoped>
</style>
