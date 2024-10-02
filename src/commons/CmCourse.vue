<template>
  <div
    class="bg-white transition-all duration-200 shadow-lg hover:shadow-sm flex gap-[26px] items-center py-[36px] px-[16px] rounded-[8px] relative"
  >
    <div class="size-[90px] overflow-hidden rounded-[8px]">
      <img class="h-full object-cover" :src="imgCourse" alt="" />
    </div>
    <div>
      <div class="text-[16px] font-semibold flex gap-[6px] mb-[10px]">
        <h1 class="text-[#1570ef]">#{{ idCourse }}</h1>
        <h1 class="text-[#344054]">
          {{ nameCourse }}
        </h1>
      </div>
      <div class="flex items-center gap-[12px]">
        <img height="size-[18px]" src="@/assets/calendar.svg" alt="" />
        <p class="text-[14px] text-[#344054] leading-[20px]">
          {{ timeCreated }}
        </p>
      </div>
    </div>

    <router-link
      class="text-[#1570ef] font-semibold absolute bottom-0 right-0 translate-x-[-20%] translate-y-[-50%]"
      to="#"
    >
      Xem chi tiết
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    idCourse: {
      type: Number,
      required: true,
    },
    nameCourse: {
      type: String,
      required: true,
    },
    timeCreated: {
      type: String,
      required: true,
    },
    imgCourse: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
