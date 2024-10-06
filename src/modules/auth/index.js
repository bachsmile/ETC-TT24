import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default {
  namespaced: true, // Để hỗ trợ namespace cho module
  state,
  getters,
  mutations,
  actions,
};
