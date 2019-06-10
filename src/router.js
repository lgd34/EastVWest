import Vue from 'vue'
import Router from 'vue-router'

// TODO: Import component you created
import Home from './components/Home.vue'
import Lvl1 from './components/Lvl1.vue'
import Lvl2 from './components/Lvl2.vue'
import Lvl3 from './components/Lvl3.vue'
import Lvl4 from './components/Lvl4.vue'
import Lvl5 from './components/Lvl5.vue'
import Lvl6 from './components/Lvl6.vue'
import Lvl7 from './components/Lvl7.vue'
import Lvl8 from './components/Lvl8.vue'
import Lvl9 from './components/Lvl9.vue'
import Lvl10 from './components/Lvl10.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  // TODO: Update routes to include your component
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/lvl/1',
      name: 'Lvl1',
      component: Lvl1
    },
    {
      path: '/lvl/2',
      name: 'Lvl2',
      component: Lvl2
    },
    {
      path: '/lvl/3',
      name: 'Lvl3',
      component: Lvl3
    },
    {
      path: '/lvl/4',
      name: 'Lvl4',
      component: Lvl4
    },
    {
      path: '/lvl/5',
      name: 'Lvl5',
      component: Lvl5
    },
    {
      path: '/lvl/6',
      name: 'Lvl6',
      component: Lvl6
    },
    {
      path: '/lvl/7',
      name: 'Lvl7',
      component: Lvl7
    },
    {
      path: '/lvl/8',
      name: 'Lvl8',
      component: Lvl8
    },
    {
      path: '/lvl/9',
      name: 'Lvl9',
      component: Lvl9
    },
    {
      path: '/lvl/10',
      name: 'Lvl10',
      component: Lvl10
    }
  ]
})
