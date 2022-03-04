<script>
export default {
    name:"Profile",

    methods:{
        down(){
            window.location = "#footer"
        }
    }
}
</script>

<template>
    <div class="content-profile">
        <div class="home">
            <div class="sociais-links">
                <a href="https://instagram.com/codando.santos?utm_medium=copy_link" target="_blank"><i class="bi bi-instagram"></i></a>
                <a href="https://github.com/Juansantoss07" target="_blank"><i class="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/juan-cunha-dos-santos-64b809181" target="_blank"><i class="bi bi-linkedin"></i></a>
            </div>
            <div class="profile-img">
                <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Profile">
            </div>
            <div @click="down" class="info">
                <p>Scroll Down</p><i class="bi bi-arrow-down-circle-fill"></i>
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="./style.scss" scoped/>