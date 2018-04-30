import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

/* Vuex Modules */
import Users from './users';

const store = new Vuex.Store({
    modules: {
        Users,
    }
});

export default store;