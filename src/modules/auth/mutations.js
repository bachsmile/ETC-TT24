// mutations.js
export default {
  SET_USER(state, user) {
    state.user = user;
    state.isAuthenticated = !!user; // Chuyển đổi user thành boolean
  },
  SET_AUTH_ERROR(state, error) {
    state.authError = error;
  },
};
