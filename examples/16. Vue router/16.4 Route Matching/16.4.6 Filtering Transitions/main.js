import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
var router = new VueRouter({
history: true,
root: '/'
})

router.map({
    '/': {
        name: 'home',
        component: require('./components/Hello.vue')
    },
    '/login': {
        name: 'login',
        component: require('./components/Login.vue')
    },
    '/stories': {
        name: 'stories',
        component: require('./components/Stories.vue'),
         subRoutes: {
            '/famous': {
                component: require('./components/Famous.vue')
            },
        }
    },
    '/stories/:storyId/edit': {
        name: 'edit',
        component: require('./components/Edit.vue'),
    },
})

// create a dummy user object
var User = {
  isAdmin: false
}

router.beforeEach(function (transition) {
  if (transition.to.path != '/login' && !User.isAdmin) {
    // if not going to login and not an admin redirect to login
    router.go('/login')
  } else {
    //if authorized proceed
    transition.next()
  }
})

router.start(App, 'body')
