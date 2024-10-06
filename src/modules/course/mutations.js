export default {
  SET_COURSE(state, course) {
    console.log('Course set in state:', course);
    state.course = course;
  },
};
