import axios from 'axios';
import Vue from "vue";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

let token = document.head.querySelector('meta[name="csrf-token"]');

axios.defaults.baseURL = `${App.base_url}/api/v1`;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;

export default function(VueInstance) {

    axios.interceptors.request.use(config => {
        VueInstance.$Progress.start();
        return config;
    });

    axios.interceptors.response.use(response => {
        VueInstance.$Progress.finish();
        return response;
    });

}