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
        name: 'home', // give the route a name
        component: require('./components/Hello.vue')
    },
    '/login': {
        name: 'login', // give the route a name
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
})

router.start(App, 'body')
