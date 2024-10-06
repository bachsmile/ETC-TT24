<template>
  <div class="flex flex-col gap-[20px]">
    <h1 class="font-semibold text-[#101828] text-[16px]">Giới thiệu về khóa học</h1>
    <p class="text-[#344054] text-[14px] leading-[20px] font-light">
      Nội dung khóa học Nội dung khóa học Nội dung khóa học Nội dung khóa học Nội dung khóa học Nội dung khóa học Nội
      dung khóa học Nội dung khóa học Nội dung khóa học Nội dung khóa học Nội dung khóa học Nội dung khóa học Nội dung
      khóa học Nội dung khóa học Nội dung khóa học Nội dung khóa học Nội dung khóa học Nội dung khóa học Nội dung khóa
      học Nội dung khóa học Nội dung khóa học Nội dung khóa học Nội dung khóa học Nội dung khóa học Nội dung khóa học
    </p>
    <span class="text-[#175CD3] font-semibold cursor-pointer flex items-center gap-1 animate-bounce w-max"
      >Hiện thêm <img src="../../../../assets/chervon-down.svg" alt=""
    /></span>

    <div class="pt-[10px]">
      <div class="mb-[24px]">
        <h1 class="font-semibold mb-[16px]">Thông tin tác giả</h1>
        <div class="flex items-center gap-6">
          <div class="size-[96px] rounded-full border-2 border-white cicrle-shadow">
            <img class="size-[100%] object-cover rounded-full" :src="getCourse.authors[0].imgURL" alt="" />
          </div>
          <div class="flex justify-center flex-col gap-1">
            <h1 class="text-[18px] font-semibold text-[#101828]">
              {{ getCourse.authors[0].name }}
            </h1>
            <p class="text-[16px] font-light leading-[24px] text-[#667085]">Chủ khóa học</p>
          </div>
        </div>
      </div>
      <div class="bg-[#EFF8FF] border border-[#EAECF0] rounded-[8px] px-[16px] py-[12px] flex flex-col gap-[24px]">
        <h1 class="font-semibold text-[14px] mb-[16px] leading-[20px]">Danh sách tác giả</h1>
        <div class="grid grid-cols-3 gap-[24px]">
          <CmUser v-for="item in getCourse.authors" :id="item.id" :key="item.id" :name="item.name" :img="item.imgURL" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CmUser from '@/commons/CmUser.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    CmUser,
  },

  computed: {
    ...mapGetters('course', ['getCourse']),
  },
};
</script>

<style>
.cicrle-shadow {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}
</style>
