import Vue from 'vue'
import App from './App.vue'
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    console.log(binding)
    let delay = 0
    if (binding.modifiers['delayed']) {
      delay = 2000
    }
    setTimeout(() => {
      if (binding.value) {
        if (binding.arg === 'background') {
          el.style.backgroundColor = binding.value
        } else {
          el.style.color = binding.value
        }
      } else {
        el.style.backgroundColor = 'yellow'
      }
    }, delay)
  }
})
// Vue.directive('backcolor', {
//   bind(el, binding, vnode) {
//     el.style.backgroundColor = binding.value
//   }
// })
new Vue({
  el: '#app',
  render: h => h(App)
})
