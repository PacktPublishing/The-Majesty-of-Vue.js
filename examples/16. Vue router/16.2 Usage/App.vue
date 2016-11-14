<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <h1>Welcome to Routing!</h1>
    <a v-link="{ path: '/' }">Home</a>
    <a v-link="{ path: '/login' }">Login</a>
    <!-- route outlet -->
    <router-view></router-view>
  </div>
</template>

<script>
// // import Components as usual
// import Stories from './components/Stories'
// import Register from './components/Register'
// import Login from './components/Login'

export default {
  replace: false,
}
</script>
