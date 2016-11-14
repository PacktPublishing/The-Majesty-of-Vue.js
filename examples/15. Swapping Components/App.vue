<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <h1>Welcome to dynamic Components!</h1>
    <ul class="nav nav-tabs">
    <!-- set 'active' class conditionally -->
      <li v-for="page in pages" class="{{isActivePage(page) ? 'active' : ''}}">
      <!-- use links to change between tabs -->
        <a @click="setPage(page)">{{page | capitalize}}</a>
      </li>
    </ul>
    <component :is="activePage"></component>
  </div>
</template>

<script>
// import Components as usual
import Stories from './components/Stories'
import Register from './components/Register'
import Login from './components/Login'

export default {
  components: {
    Stories,
    Register,
    Login
  },
  data () {
    return {
      // the pages we want to render each time
      pages: [
        'stories',
        'register',
        'login'
      ],
      activePage: 'stories'
    }
  },
  methods: {
    setPage (newPage) {
      this.activePage = newPage
    },
    isActivePage (page) {
      return this.activePage === page
    }
  }
}
</script>
