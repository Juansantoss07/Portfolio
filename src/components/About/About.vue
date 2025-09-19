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
                    Pós graduado em Engenharia de Software.🧑‍🎓<br>
                    Apaixonado por programação, atualmente Trabalho como desenvolvedor full-stack. Minhas linguagens e ferramentas favoritas são JavaScript, VueJS, PHP, Laravel, Python, Django, Magento2, Bagisto. Inclusive desenvolvi esse portfólio usando VueJs.
                    Atuei como Desenvolvedor de Software full-stack na empresa <a class="link-empresas" href="https://www.grupotv1.com.br/" target="_blank">TV1</a>, contribuindo em projetos para grandes clientes como Heineken, Nubank, Carrefour, Nestlé, Mobil, Vivara e Record TV. <br><br>
                    Atualmente faço parte da Group Moon <a class="link-empresas" href="https://dizycommerce.com.br/" target="_blank">Dizy Commerce</a> onde sou responsável por criar e corrigir funcionalidades na plataforma de e-commerce magento 2. Atuo também como coordenador de projetos de implantação de novas lojas, tendo contribuído em iniciativas de grandes marcas como Mixed, Paula Ferber, Fillity, Linea e Aluf.<br><br>
                   
                    Além dessas Experiências, sou CEO da <a class="link-empresas" href="https://www.pixelcommerce.com.br/" target="_blank">Pixel</a>, onde desenvolvemos landing-pages, portfólios e ecommerces, além de prestar suporte a sites já existentes, como Eclé, Iris, e o Sapo não lava o Pé.
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
