import Vue from 'vue'
import Router from 'vue-router'
import StartView from '../views/StartView.vue'
import AbsLevel from '../views/AbsLevel.vue'
import BallsLevel from '../views/BallsLevel.vue'
import PlankLevel from '../views/PlankLevel.vue'
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
      path: '/plank',
      name: 'PlankLevel',
      component: PlankLevel
    },
    {
      path: '/abs',
      name: 'AbsLevel',
      component: AbsLevel
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
