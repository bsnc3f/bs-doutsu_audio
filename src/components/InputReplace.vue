<template>
  <div id="app">
    <h1>入力制限を設けたインプットフォーム</h1>
    <p>英数字以外の入力をキャンセルするinputフォーム</p>
    <input
      class="testkey"
      type="text"
      name="testkey"
      id="testkey"
      v-model="testkey"
      @keyup="keyUpHalfSizeRestriction"
    />
    <p>{{ testkey }}</p>

    <p>数字以外の入力をキャンセルするinputフォーム</p>
    <input
      class="testkey"
      type="text"
      name="testkey"
      id="testkey"
      v-model="testkey2"
      @keyup="keyUpNumberRestriction"
    />
    <p>{{ testkey2 }}</p>
    <hr />
    <h1>全角半角への置き換え</h1>
    <div class="form-group">
      <label class="col-md-2 control-label">全角のまま</label>
      <div class="col-md-10">
        <input class="form-control" v-model.trim="a" />
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-2 control-label">全角英数 ⇒ 半角</label>
      <div class="col-md-10">
        <input class="form-control" v-model.trim="b" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  // data: {
  //   testkey: "",
  // },
  data() {
    return {
      testkey: "",
      testkey2: "",
      a: "",
      b: "",
    };
  },
  methods: {
    keyUpHalfSizeRestriction: function () {
      var tmp_value = this.testkey;
      if (tmp_value) {
        this.testkey = tmp_value.replace(/[^0-9a-zA-Z]/g, "");
      }
    },
    keyUpNumberRestriction: function () {
      var tmp_value2 = this.testkey2;
      if (tmp_value2) {
        this.testkey2 = tmp_value2.replace(/[^0-9]/g, "");
      }
    },
  },
  watch: {
    a: function (v) {
      this.a = v.replace(/[A-Za-z0-9]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) + 65248);
      });
    },
    b: function (v) {
      this.b = v.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
      });
    },
  },
};
</script>


<style scoped>
</style>
