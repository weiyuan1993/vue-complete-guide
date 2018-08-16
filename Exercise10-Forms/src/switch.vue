<template>
  <div>
    <div id="on"
    @click="switchButton(true)"
    :class="{active:value}"
    >on</div>
    <div id="off"
    @click="switchButton(false)"
    :class="{active:!value}"
    >off</div>
  </div>
</template>
<script>
export default {
  props: ['value'],
  methods: {
    switchButton(isOn) {
      // 這邊 emit input event 讓父層能使用 v-model 雙向綁定
      this.$emit('input', isOn)
    }
  }
}
</script>
<style scoped>
#on,
#off {
  width: 40px;
  height: 20px;
  background-color: gray;
  padding: 2px;
  display: inline-block;
  margin: 10px -2px;
  box-sizing: content-box;
  cursor: pointer;
  text-align: center;
}
#on.active,
#on:hover {
  background-color: aquamarine;
}
#off.active,
#off:hover {
  background-color: coral;
}
</style>
