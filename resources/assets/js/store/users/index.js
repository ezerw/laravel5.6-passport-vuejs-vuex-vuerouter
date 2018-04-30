import Users from '../../api/users';

const state = {
  users: [],
};
const getters = {
  getAll(state) {
    return state.cities;
  }
};
const actions = {
  fetchAll({commit}) {
    return Users.fetchAll().then(response => {
      commit('setUsers', response.data);
    });
  },

  create({commit}, payload) {
    return Users.create(payload).then(response => {
      console.log('Created')
    });
  }
};
const mutations = {
  setUsers(state, response) {
    state.users = response.data;
  }
};

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations,
};