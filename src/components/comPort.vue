<template>
<div id="app">
  <p>{{ SerialData }}</p>
    <button v-on:click="serials()">Serials</button>
</div> 
</template>

<script>
// モジュール読み込み
var SerialPort = require("serialport");
// シリアルポート設定 9600bps
var port = new SerialPort("COM12",{ baudRate: 9600 });


export default {
  name: "app",
  data() {
    // SerialData: null
  },
  mounted() {
// 'use strict';

// ポートあけた
port.on('open', function() {
	console.log('開けたぜ。');
});

// 送信テスト
port.write("ああ～早く調歩同期まみれになろうぜ。", function(err){
	if(err){
		// エラーハンドル
		return console.log('ああ＾～たまらねえぜ。:', err.message);
	}
	// 成功
	console.log("送ったぜ。");
});

// 受信待ち
port.on('data', function(data) {
  var text = String(data);
  this.SerialData = text;
	console.log(text);
});
}

}
</script>
