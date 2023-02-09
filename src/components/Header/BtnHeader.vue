<script>
export default {
    name:"BtnHeader",
    methods:{
        contact(){
            window.open("https://api.whatsapp.com/send?phone=5511945691430&text=Olá, peguei seu contato através do seu portfólio!", "_blank")
        },

        nocv(){
           document.getElementById('alert').style.display = 'flex'
        },

        close(){
            document.getElementById('alert').style.display = 'none'
        }
    }
}
</script>

<template>
    <div class="content-btnheader">
        <div class="btns">
            <button @click="nocv" class="btn-down">
            Download CV
        </button>
        <button @click="contact" class="btn-cont">
            Contato
        </button>
        <div id="alert" class="alert">
            <p>CV não disponível no momento</p>
            <button @click="close">
                Okay
            </button>
        </div>
        </div>
    </div>
</template>

<style lang="sass" src="./style.scss" scoped/>
