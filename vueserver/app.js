import Vue from 'vue';
import Router from 'vue-router';
import MainApp from '@/MainApp';

import swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsComponent from '@/components/NewsComponent';
import BoardComponent from '@/components/BoardComponent';

import './app.css';

Vue.use(Router);

const router = new Router({
    routes:[
        {
            path:'/',
            name:'news-page',
            component:NewsComponent
        },
        {
            path:'/board',
            name:'board-page',
            component:BoardComponent
        }
    ]
});

window.swal = swal;
window.onload = ()=>{
    new Vue({
        el:"#app",
        router,
        render: h => h(MainApp)
    })
}