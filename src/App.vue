<script>
  import Header from "./components/Header/Header.vue"
  import Profile from "./components/Profile/Profile.vue"
  import Nav from "./components/Nav/Nav.vue"
  import About from "./components/About/About.vue"

  export default{
    components:{
      Header,
      Profile,
      Nav,
      About
    }
  }
</script>

<template>
    <Header/>
    <Profile/>
    <Nav/>
    <About/>
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
  
  .title{
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
  }

  .subtitle{
    font-size: 28px;
    color: rgb(72, 136, 255);
  }

          .btn-cont{
            padding: .8rem 1rem;
            font-size: 15px;
            border-radius: 5px;
            border:  1px solid rgb(72, 136, 255);
            background-color: rgb(72, 136, 255);
            color: #000;
            cursor: pointer;
            transition: .5s;
        }

        .btn-cont:hover{
            box-shadow: 6px 6px 2px rgb(28, 51, 99);
        }
</style>