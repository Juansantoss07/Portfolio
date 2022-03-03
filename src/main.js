import { createApp } from 'vue'
import App from './App.vue'
import ScrollReveal from 'scrollreveal'

createApp(App).mount('#app')

ScrollReveal({
    distance: '60px',
    duration: 2500, 
    delay: 400
});

ScrollReveal().reveal('.about-img', {delay:400, origin:'left'});
ScrollReveal().reveal('.info-about', {delay:400, origin:'right'});
ScrollReveal().reveal('.content-header', {delay:400, origin:'top'});
ScrollReveal().reveal('.sociais-links', {delay:200, origin:'left'});
ScrollReveal().reveal('.profile-img', {delay:200});
ScrollReveal().reveal('.info', {delay:400, origin:'right'});
ScrollReveal().reveal('.nav-links', {delay:100, origin:'bottom'});

