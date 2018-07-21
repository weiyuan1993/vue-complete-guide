import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'

// Global register component
Vue.component('Home',Home)
new Vue({
  el: '#app',
  render: h => h(App)
})
