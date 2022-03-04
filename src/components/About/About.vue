<script>
export default {
    name:"About",

     methods:{
        contact(){
            window.open("https://api.whatsapp.com/send?phone=5511945691430&text=Olá, peguei seu contato através do seu portfólio!", "_blank")
        }
    }
}
</script>

<template>
    <div id="about" class="content-about">
        <div class="title">
            <h2 class="subtitle">About</h2>
        </div>
        <div class="box-about">
            <div class="about-img">
                <img src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
            </div>
            <div class="info-about">
                <div class="cards">
                    <div class="card">
                        <i class="bi bi-people-fill"></i>
                        <h1>Experiência</h1>
                        <p>2+ anos</p>
                    </div>
                    <div class="card">
                        <i class="bi bi-people-fill"></i>
                        <h1>Clientes</h1>
                        <p>20+ Clientes</p>
                    </div>
                    <div class="card">
                        <i class="bi bi-journal-code"></i>
                        <h1>Projetos</h1>
                        <p>30+ Projetos</p>
                    </div>
                </div>
                <div class="text">
                    Apaixonado por programação. Atualmente Trabalho com construção de sites, lojas virtuais e sou Desenvolvedor na empresa TV1. Para ver mais sobre meus trabalhos clique na opção Works ou acesse meu GitHub.
                </div>
                <button @click="contact" class="btn-cont">
                    Contato
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="./style.scss" scoped/>