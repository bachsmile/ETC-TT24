import Vue from 'vue';
import Vuex from 'vuex';
import { getMockAuthor, getMockComment, getMockCourses } from '@/utils/MockupApi';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    author: [],
    courses: [],
    comments: [],
  },
  getters: {
    author: state => state.author,
    courses: state => state.courses,
    comments: state => state.comments,
  },
  mutations: {
    SET_AUTHORS(state, author) {
      state.author = author;
    },

    SET_COURSES(state, course) {
      state.courses = course;
    },

    SET_COMMENTS(state, comment) {
      state.comments = comment;
    },
  },
  actions: {
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
  },

  modules: {},
});
