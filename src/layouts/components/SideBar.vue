<template>
  <div
    :class="[
      'min-h-[100vh] z-[1000] bg-white shadow-2xl py-4 px-2 flex flex-col gap-[70px] relative transition-all duration-300',
      isVisible ? 'w-[320px]' : 'w-[80px]',
    ]"
  >
    <div class="mx-auto">
      <img class="w-full max-w-[100px]" src="../../assets/logo.jpg" alt="Logo" />
    </div>

    <div class="flex flex-col gap-4">
      <CmAccordion
        :img-icon="require('../../assets/study.svg')"
        title="Chương trình đào tạo của tôi"
        :content="[
          { value: 'Nội dung đang học' },
          { value: 'Khóa học của tôi' },
          { value: 'Kỳ thi của tôi' },
          { value: 'Lộ trình đào tạo' },
          { value: 'Khảo sát của tôi' },
        ]"
        :is-sidebar-visible="isVisible"
      />
      <CmAccordion
        :img-icon="require('../../assets/app.svg')"
        title="Ứng dụng"
        :content="[
          { value: 'Nội dung đang học' },
          { value: 'Khóa học của tôi' },
          { value: 'Kỳ thi của tôi' },
          { value: 'Lộ trình đào tạo' },
          { value: 'Khảo sát của tôi' },
        ]"
        :is-sidebar-visible="isVisible"
      />
    </div>

    <!-- Nút đóng sidebar -->
    <button
      class="absolute z-[1000] top-1/2 right-0 translate-x-[50%] flex justify-center items-center w-[40px] h-[40px] rounded-full activeSideBar animate-pulse"
      @click="$emit('toggle-sidebar')"
    >
      <i :class="isVisible ? 'fa-solid fa-chevron-left' : 'fa-solid fa-chevron-right'"></i>
    </button>
  </div>
</template>

<script>
import CmAccordion from '@/commons/CmAccordion.vue';

export default {
  components: {
    CmAccordion,
  },
  props: {
    isVisible: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.activeSideBar {
  border: 2px solid #10182877;
  color: #10182877;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: white;
  font-size: 14px;
}
</style>
