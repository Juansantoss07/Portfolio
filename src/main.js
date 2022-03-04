import { createApp } from 'vue'
import App from './App.vue'
import ScrollReveal from 'scrollreveal'

createApp(App).mount('#app')

ScrollReveal({
    distance: '60px',
    duration: 2500, 
    delay: 400
});

{ mobile: true }

ScrollReveal().reveal('.about-img', {delay:400, origin:'left', mobile: false});
ScrollReveal().reveal('.info-about', {delay:400, origin:'right', mobile: false});
ScrollReveal().reveal('.content-header', {delay:400, origin:'top'});
ScrollReveal().reveal('.sociais-links', {delay:200, origin:'left',mobile: false});
ScrollReveal().reveal('.profile-img', {delay:200});
ScrollReveal().reveal('.info', {delay:400, origin:'right',mobile: false});
ScrollReveal().reveal('.nav-links', {delay:100, origin:'bottom'});
ScrollReveal().reveal('.box-myskills', {delay:100, origin:'bottom'});

