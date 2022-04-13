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
        <p>Hello, I'am</p>
        <h1>Juan Santos</h1>
        <p>FrontEnd Developer and Design UX/Ui</p>
             <BtnHeader/>
    </div>
</template>

<style lang="sass" src="./style.scss" scoped/>
