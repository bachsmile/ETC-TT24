import { getCourseById } from '@/services/course/course';

export default {
  async fetchCourseById({ commit }, idCourse) {
    try {
      const course = await getCourseById(idCourse);
      console.log('Fetched course:', course);
      commit('SET_COURSE', course);
    } catch (error) {
      console.error('Failed to fetch course by ID:', error);
    }
  },
};
