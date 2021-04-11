<template>
  <div class="stick" :class="[type, { light: light }]" />
</template>

<script>
export default {
  props: {
    type: {
      typs: String,
      default: "vertical",
    },
  },

  data() {
    return {
      light: false,
    };
  },

  methods: {
    on() {
      this.light = true;
    },

    off() {
      this.light = false;
    },
  },
};
</script>

<style scoped>
.stick {
  background-color: rgba(21, 62, 95, 0.2);
  /* background-color: rgba(200, 255, 200, 0.2); */

  border-radius: 10px;
}

.vertical {
  height: 50px;
  width: 10px;
}

.horizontal {
  height: 10px;
  width: 50px;
}

.light {
  background-color: rgb(157, 172, 185);
  /* background-color: yellowgreen; */
}
</style>