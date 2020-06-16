import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '../pages/Home.vue';
// import About from '@/pages/About.vue';
import ContactComponent from '@/pages/Contact.vue';
import User from '@/pages/User.vue';

Vue.use(VueRouter);

const  router = new VueRouter({
    mode:'history',
    base: '/',
    routes:[
        {
            path:'/',
            name:"Home",
            component:HomeComponent
        },
        {
            path:'/user',
            name:"User",
            component:User
        },
        {
            path:'/contact',
            name:"Contact",
            component:ContactComponent
        },
        {
            path:'*',
            redirect: '/'
        }

    ]
})

export default router;