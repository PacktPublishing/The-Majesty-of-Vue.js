<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <h1>Welcome to Routing!</h1>
    <!-- instead of 'path' use name: 'yourName' -->
    <a v-link="{ name: 'home'  }">Home</a>
    <a v-link="{ name: 'login' }">Login</a>
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
