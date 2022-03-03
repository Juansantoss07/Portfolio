<script>
  import Header from "./components/Header/Header.vue"
  import Profile from "./components/Profile/Profile.vue"
  import Nav from "./components/Nav/Nav.vue"

  export default{
    components:{
      Header,
      Profile,
      Nav
    }
  }
</script>

<template>
    <Header/>
    <Profile/>
    <Nav/>
</template>

<style lang="scss">
  body,
  html{
    padding:0;
    margin:0;
    box-sizing: border-box;
    font-family: 'League Spartan', sans-serif;
    background:#1d1f3a;
  }
</style>