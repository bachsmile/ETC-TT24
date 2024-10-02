import Vue from 'vue';
import Vuex from 'vuex';
import { getMockAuthor, getMockComment, getMockCourses } from '@/utils/MockupApi';
import { login } from '@/services/auth/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    author: [],
    courses: [],
    comments: [],
    user: null,
    isAuthenticated: false,
    authError: null,
  },
  getters: {
    // Mockup API
    author: state => state.author,
    courses: state => state.courses,
    comments: state => state.comments,
    // Auth
    isAuthenticated: state => state.isAuthenticated,
    user: state => state.user,
    authError: state => state.authError,
  },
  mutations: {
    // Mockup API
    SET_AUTHORS(state, author) {
      state.author = author;
    },
    SET_COURSES(state, course) {
      state.courses = course;
    },
    SET_COMMENTS(state, comment) {
      state.comments = comment;
    },
    // Auth
    SET_USER(state, user) {
      state.user = user;
      state.isAuthenticated = !!user;
    },
    SET_AUTH_ERROR(state, error) {
      state.authError = error;
    },
  },
  actions: {
    // Mockup API
    fetchAuthors({ commit }) {
      return getMockAuthor().then(response => {
        commit('SET_AUTHORS', response.data);
      });
    },
    fetchCourses({ commit }) {
      return getMockCourses().then(response => {
        commit('SET_COURSES', response.data);
      });
    },
    fetchComments({ commit }) {
      return getMockComment().then(response => {
        commit('SET_COMMENTS', response.data);
      });
    },
    // Auth
    async loginUser({ commit }, formData) {
      try {
        const response = await login(formData);

        commit('SET_USER', response.user);
        commit('SET_AUTH_ERROR', null);
        return response;
      } catch (error) {
        commit('SET_AUTH_ERROR', error.message || 'Đăng nhập thất bại');
        throw error;
      }
    },
    logout({ commit }) {
      commit('SET_USER', null);
    },
  },
  modules: {},
});
