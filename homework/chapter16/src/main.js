import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
  history: true,
  root: '/'
})

router.map({
  '/': {
    component: require('./components/Home.vue')
  },
  '/category/:name': {
    name: 'show',
    component: require('./components/Category.vue'),
    subRoutes: {
      '/pokemons/new': {
        component: require('./components/Create.vue')
      },
    }
  },
})

router.beforeEach(function (transition) {
  console.log('You are heading to: ' + transition.to.path)
  transition.next()
})

router.start(App, 'body')
