// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import App from './App'
import router from './router'
import store from './store'
import VueTouch from 'vue-touch';
import Vue2TouchEvents from 'vue2-touch-events'

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(VueTouch);
Vue.use(Vue2TouchEvents);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  Vue2TouchEvents,
  components: { App },
  template: '<App/>'
})
