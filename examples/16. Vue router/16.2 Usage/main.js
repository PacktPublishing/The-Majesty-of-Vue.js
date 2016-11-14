import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
var router = new VueRouter()
router.map({
  '/': {
    component: require('./components/Hello.vue')
  },
  '/login': {
    component: require('./components/Login.vue')
  }
})
router.start(App, 'body')
