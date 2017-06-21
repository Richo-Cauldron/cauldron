import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import Routes from './routes'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/nav.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)



const router = new VueRouter({
	routes: Routes,
	mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
