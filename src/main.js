import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// axios.create({
//   baseURL: "https://api.openweathermap.org/data/2.5/weather?",
//   // headers: { accept: "application/json" },
//   params: {
//     q: this.val,
//     // units: 30.1343777,
//     APPID: this.val,
//     // search_diameter: 2808.2220265942824,
//   },
// }),