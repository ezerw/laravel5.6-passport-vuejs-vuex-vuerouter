import VueRouter from 'vue-router';
import Vue from 'vue';

import Dashboard from '../components/pages/Dashboard';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;

