<script>

import BtnHeader from "./BtnHeader.vue"
export default {
    name:"Header",
    components:{
        BtnHeader
    }
}
</script>

<template>
    <div id="home" class="content-header">
        <p>Hello, World! Eu sou o</p>
        <h1>Juan Santos</h1>
        <p>Full-Stack Developer</p>
             <BtnHeader/>
    </div>
</template>

<style lang="sass" src="./style.scss" scoped/>
