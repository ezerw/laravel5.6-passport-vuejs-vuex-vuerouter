import Vue from 'vue';
import VueProgressBar from 'vue-progressbar';
import {
  Table,
  Pagination,
  Modal,
  Breadcrumb,
  Dropdown,
  InputGroup,
  Button
} from 'bootstrap-vue/es/components';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import router from './router';
import store from './store';
import bootstrap from './bootstrap';

Vue.use(Table);
Vue.use(Pagination);
Vue.use(Modal);
Vue.use(Breadcrumb);
Vue.use(Dropdown);
Vue.use(InputGroup);
Vue.use(Button);

Vue.use(VueProgressBar, {
    color: '#49d47e',
    failedColor: '#d73a49',
    thickness: '2px',
    transition: { speed: '0.1s', opacity: '0.7s', termination: 300 },
    autoRevert: false,
    location: 'top',
    inverse: false
});

Vue.component('fa-icon', FontAwesomeIcon);

bootstrap(new Vue({
    name: App.name,
    el: '#app',
    router,
    store,
    render: h => h(require('./App.vue'))
}));