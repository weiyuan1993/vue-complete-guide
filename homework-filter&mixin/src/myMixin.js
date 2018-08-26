export const Mymixin = {
  data() {
    return {
      inputText2: ''
    }
  },
  computed: {
    lengthOfText() {
      return `${this.inputText2} (${this.inputText2.length})`
    }
  }
}
