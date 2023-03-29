import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import '@/styles/bootstrap5.css'
// import datepicker
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
// import vue-select
import 'vue-select/dist/vue-select.css';
import vSelect from 'vue-select';
// import VueSweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674',
  };

createApp(App).use(store).use(router).use(VueSweetalert2, options).component('v-select', vSelect).component('Datepicker', Datepicker).mount('#app')
