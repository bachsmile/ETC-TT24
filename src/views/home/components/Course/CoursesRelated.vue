<template>
  <div class="my-[40px]">
    <h1 class="mb-[40px] text-[18px] font-semibold">Các khóa học liên quan</h1>
    <div class="flex flex-col gap-[20px] mb-[40px]">
      <CmCourse
        v-for="course in courses"
        :key="course.idCourse"
        :id-course="course.idCourse"
        :name-course="course.nameCourse"
        :img-course="course.img"
        :time-created="course.timeCreated"
      >
      </CmCourse>
    </div>
    <button
      class="flex justify-center items-center gap-3 animate-bounce mx-auto py-[8px] px-[14px] bg-[#EFF8FF] rounded-[8px]"
    >
      <img src="@/assets/Arrow-down.svg" alt="" />
      <h1 class="text-[#1659cc] font-semibold">Xem thêm</h1>
    </button>
  </div>
</template>

<script>
import CmCourse from '@/commons/CmCourse.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    CmCourse,
  },

  computed: {
    ...mapGetters(['courses']),
  },

  created() {
    this.$store.dispatch('fetchCourses');
  },
};
</script>

<style></style>
