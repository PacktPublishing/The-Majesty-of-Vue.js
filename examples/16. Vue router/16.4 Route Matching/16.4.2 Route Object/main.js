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

router.start(App, 'body')
