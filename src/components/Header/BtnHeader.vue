<script>
export default {
    name:"BtnHeader",
    methods:{
        contact(){
            window.open("https://api.whatsapp.com/send?phone=5511945691430&text=Olá, peguei seu contato através do seu portfólio!", "_blank")
        }
    }
}
</script>

<template>
    <div class="content-btnheader">
        <div class="btns">
            <button class="btn-down">
            Download CV
        </button>
        <button @click="contact" class="btn-cont">
            Contato
        </button>
        </div>
    </div>
</template>

<style lang="sass" src="./style.scss" scoped/>
