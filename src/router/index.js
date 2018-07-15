import Vue from 'vue'
import Router from 'vue-router'
import StartView from '../views/StartView.vue'
import BallsLevel from '../views/BallsLevel.vue'
import CongratulationView from '../views/CongratulationView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'StartView',
      component: StartView
    },
    {
      path: '/balls',
      name: 'BallsLevel',
      component: BallsLevel
    },
    {
      path: '/congrat',
      name: 'CongratulationView',
      component: CongratulationView
    },

  ]
})
