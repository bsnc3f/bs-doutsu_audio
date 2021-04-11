<template>
<div id="app">
  <h2>税引き／税込み Input</h2>
  <p>
    税抜き価格: <input type="text" v-model="basePrice">
  </p>
  <p>
    税込み価格: <input type="text" v-model="taxIncludedPrice">
  </p>

  <hr>
  <h2>ウォッチャー Input</h2>
  <p>
    {{ message }}
  </p>
  <input type="text" v-model="message">

  <hr>
  <h2>単位計算 Input</h2>
  <p>
    <input type="text" v-model="km">km
  </p>
  <p>
    <input type="text" v-model="m">m
  </p>
  <p>
    <input type="text" v-model="mm">mm
  </p>
  <hr>
  <pre> {{ $data }} </pre>
  <hr>
</div>

</template>

<script>
export default {
  name: "app",
  data() {
    return {
      basePrice: '',
      message: 'Hello Vue.js!',

      km: '',
      m: '',
      mm: ''
      }
  },
  computed: {
    taxIncludedPrice: {
      get() {
        return parseInt(this.basePrice * 1.08)
      },
      set(taxIncludedPrice) {
        this.basePrice = Math.ceil(taxIncludedPrice / 1.08)
      }
    }
  },
  watch: {
    // ウォッチャー
    message(newValue, oldValue) {
      console.log('new: %s, old: %s', newValue, oldValue)
    },
    km(value) {
      // console.log(value);
      this.km = value
      this.m = value * 1000
      this.mm = value *1000000
    },
    m(value) {
      this.km = value / 1000
      this.m = value
      this.mm = value *1000
  },
    mm(value) {
      this.km = value / 1000000
      this.m = value / 1000
      this.mm = value
  }

  }
}
</script>

<style scoped>
#app ul {
  list-style: none;
}

#app li > span.done {
  text-decoration: line-through;
}
</style>
