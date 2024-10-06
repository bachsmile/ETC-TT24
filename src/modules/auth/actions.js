import { login, register, logout } from '@/services/auth/auth';
import toastr from 'toastr';

export default {
  async loginUser({ commit }, formData) {
    try {
      const response = await login(formData);

      commit('SET_USER', response.user);
      commit('SET_AUTH_ERROR', null);
      toastr.success('Đăng nhập thành công!');
      return response;
    } catch (error) {
      commit('SET_AUTH_ERROR', error.message || 'Đăng nhập thất bại');
      toastr.error(error.message || 'Đăng nhập thất bại');
      throw error;
    }
  },

  async registerUser({ commit }, formData) {
    try {
      const response = await register(formData);
      toastr.success('Đăng ký thành công!');
      return response;
    } catch (error) {
      commit('SET_AUTH_ERROR', error.message || 'Đăng ký thất bại');
      toastr.error(error.message || 'Đăng ký thất bại');
      throw error;
    }
  },

  logout({ commit }) {
    logout();
    commit('SET_USER', null);
    removeToken();
    toastr.info('Đã đăng xuất');
  },
};
