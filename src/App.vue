<script>
  import Header from "./components/Header/Header.vue"
  import Profile from "./components/Profile/Profile.vue"
  import Nav from "./components/Nav/Nav.vue"
  import About from "./components/About/About.vue"
  import MySkills from "./components/MySkills/MySkills.vue"
  import MyWorks from "./components/MyWorks/MyWorks.vue"  
  import Footer from "./components/Footer/Footer.vue"

  export default{
    components:{
    Header,
    Profile,
    Nav,
    About,
    MySkills,
    MyWorks,
    Footer
}
  }
</script>

<template>
    <Header/>
    <Profile/>
    <Nav/>
    <About/>
    <MySkills/>
    <MyWorks/>
    <Footer/>
</template>

<style lang="scss">
  body,
  html{
    padding:0;
    margin:0;
    box-sizing: border-box;
    font-family: 'League Spartan', sans-serif;
    background:#1d1f3a;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body::-webkit-scrollbar {
  width: 8px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: #1d1f3a;        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color:#4888ff;    /* color of the scroll thumb */
  border-radius: 5px;       /* roundness of the scroll thumb */ /* creates padding around scroll thumb */
}


  
  .title{
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
  }

  .subtitle{
    font-size: 28px;
    color: #4888ff;
    padding: 1rem 0;
  }

          .btn-cont{
            padding: .8rem 1rem;
            font-size: 15px;
            border-radius: 5px;
            border:  1px solid rgb(72, 136, 255);
            background-color: rgb(72, 136, 255);
            color: #111;
            font-weight: 600;
            cursor: pointer;
            transition: .5s;
        }

        .btn-cont:hover{
            box-shadow: 6px 6px 2px rgb(28, 51, 99);
        }
</style>