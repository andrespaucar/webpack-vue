import Vue from 'vue';
import router from './router';
import store from './store';
import Main from './App.vue';

// FONT AWESOME ICONS SVG
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Vue.component('fa',FontAwesomeIcon);

Vue.config.productionTip = false



new Vue({
    router,
    store,
    render: createEl => createEl(Main),
    
}).$mount('#app');