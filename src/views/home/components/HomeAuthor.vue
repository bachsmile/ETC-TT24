<template>
  <div>
    <div class="mb-[20px]">
      <div class="mb-3">
        <h1 class="font-semibold text-[18px]">
          {{ getCourse.courseName }}
        </h1>
      </div>
      <div class="flex justify-start items-center gap-3 w-max mb-3">
        <div class="grid grid-cols-5 gap-1">
          <img class="h-[20px]" src="../../../assets/start.svg" alt="" />
          <img class="h-[20px]" src="../../../assets/start.svg" alt="" />
          <img class="h-[20px]" src="../../../assets/start.svg" alt="" />
          <img class="h-[20px]" src="../../../assets/start.svg" alt="" />
          <img class="h-[20px]" src="../../../assets/start.svg" alt="" />
        </div>
        <div class="text-yellow-500 font-semibold text-[14px]">
          {{ getCourse.totalStars }}
        </div>
        <div class="w-[1px] h-5 bg-gray-400"></div>
        <div class="text-[#475467] text-[14px]">{{ getCourse.totalReviews }} Đánh giá</div>
      </div>
      <div class="flex gap-11 mb-3">
        <div class="flex items-center gap-3 h-max">
          <div>
            <img class="size-[32px] rounded-full object-cover" :src="getCourse.authors[0].imgURL" alt="" />
          </div>
          <div class="text-[14px]">
            <h1 class="font-semibold">
              {{ getCourse.instructorName }}
            </h1>
            <p class="text-[#667085] text-[13px] leading-[18px] font-light">Giảng Viên</p>
          </div>
        </div>
        <div class="text-[14px]">
          <h1 class="font-semibold">Chủ đề khóa học VueJS</h1>
          <p class="text-[#667085] text-[13px] leading-[18px] font-light">Chủ đề</p>
        </div>
      </div>
    </div>

    <div class="mb-[20px]">
      <div class="flex border-b border-[#EAECF0]">
        <router-link
          active-class="hightLight"
          class="h-[50px] flex justify-center items-center text-[#667085] px-6 py-2 border-b-2 border-[#ffffff00]"
          to="/courses/about"
        >
          Giới thiệu
        </router-link>

        <router-link
          active-class="hightLight"
          class="h-[50px] flex justify-center items-center text-[#667085] px-6 py-2 border-b-2 border-[#ffffff00]"
          to="/courses/content"
        >
          Nội dung
        </router-link>

        <router-link
          active-class="hightLight"
          class="h-[50px] flex justify-center items-center text-[#667085] px-6 py-2 border-b-2 border-[#ffffff00]"
          to="/courses/document"
        >
          Tài liệu khóa học
        </router-link>

        <router-link
          active-class="hightLight"
          class="h-[50px] flex justify-center items-center text-[#667085] px-6 py-2 border-b-2 border-[#ffffff00]"
          to="/courses/result"
        >
          Năng lực khóa học
        </router-link>
      </div>
    </div>
    <div>
      <router-view name="courseContent"></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'CourseContent',

  computed: {
    ...mapGetters('course', ['getCourse']),
  },
};
</script>

<style scoped>
.hightLight {
  color: #175cd3;
  border-bottom: 2px solid #175cd3;
  background-color: #eff8ff;
}
</style>
