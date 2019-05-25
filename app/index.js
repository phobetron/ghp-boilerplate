import 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import "prismjs/components/prism-bash.min";

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

import App from './App'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'hash',
})

const app = new Vue({
  el: 'my-app',
  components: {
    'my-app': App,
  },
  router,
})
