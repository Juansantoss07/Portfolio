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
            <h2 class="subtitle">Sobre</h2>
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
                        <p>3+ anos</p>
                    </div>
                    <div class="card">
                        <i class="bi bi-people-fill"></i>
                        <h1>Clientes</h1>
                        <p>30+ Clientes</p>
                    </div>
                    <div class="card">
                        <i class="bi bi-journal-code"></i>
                        <h1>Projetos</h1>
                        <p>50+ Projetos</p>
                    </div>
                </div>
                <div class="text">
                    Formado em ADS pela Uninove.🧑‍🎓<br>
                    Cursando Pós graduação em Engenharia de Software pela Faculdade Metropolitana.🧑‍🎓<br>
                    Apaixonado por programação, atualmente Trabalho como desenvolvedor full-stack. Minhas linguagens e ferramentas favoritas são JavaScript, VueJS, SASS, PHP e Laravel. Inclusive desenvolvi esse portfólio usando VueJs.
                    Atuei como Desenvolvedor de Software full-stack na empresa <a class="link-empresas" href="https://www.grupotv1.com.br/" target="_blank">TV1</a>, contribuindo em projetos para grandes clientes como Heineken, Nubank, Carrefour, Nestlé, Mobil, Vivara e Record TV. <br><br>
                    Atualmente faço parte da Group Moon <a class="link-empresas" href="https://dizycommerce.com.br/" target="_blank">Dizy Commerce</a> onde sou responsável por criar e corrigir funcionalidades na plataforma de e-commerce magento 2. Além disso, sou responsável por realizar a implantação de novas lojas, contribuíndo em projetos de grandes marcas como Mixed, Paula Feber, Mantegazza e Drogasil.<br><br>
                   
                    Além dessas Experiências, sou CEO da empresa <a class="link-empresas" href="https://expansex.netlify.app/" target="_blank">ExpanseX</a>, uma empresa de tecnologia especializada na entrega de 3 tipos de plataforma, uma de e-commerce, de portfólio e uma de agendamentos.
                    <br><br>
                    Para ver meus trabalhos públicos e pessoais clique na opção Works no menu, ou acesse meu GitHub. 
                </div>
                <button @click="contact" class="btn-cont">
                    Contato
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="./style.scss" scoped/>
