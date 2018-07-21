new Vue({
  el: "#exercise",
  data: {
    value: ""
  },
  methods: {
    showAlert() {
      alert("Button click!");
    },
    updateInputValue(e) {
      this.value = e.target.value;
    }
  }
});
