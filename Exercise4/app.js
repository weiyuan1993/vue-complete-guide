new Vue({
  el: "#exercise",
  data: {
    isHighLight: true,
    inputClass: "",
    trueOrFalse: false,
    inputWidth: 100,
    progressWidth: 0,
    myStyles: {
      backgroundColor: "#skyblue",
      width: this.inputWidth + "px"
    }
  },
  methods: {
    startEffect: function() {
      this.isHighLight = !this.isHighLight;
    },
    startProgress() {
      const progressInterval = setInterval(() => {
        if (this.progressWidth == 100) {
          clearInterval(progressInterval);
          return;
        }
        this.progressWidth++;
      }, 50);
    }
  },
  computed: {
    effectDiv() {
      return {
        highlight: this.isHighLight,
        shrink: !this.isHighLight
      };
    }
  }
});
