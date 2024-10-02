<template>
  <div class="flex flex-col gap-[16px] bg-white relative">
    <div class="absolute top-0 right-0 text-[30px] py-3 cursor-pointer">
      <img :src="more" alt="" />
    </div>
    <div class="flex gap-5 items-center">
      <div class="size-[40px]">
        <img class="size-full object-cover rounded-full" :src="imgUser" alt="" />
      </div>
      <div class="flex items-end gap-3">
        <div>
          <h1 class="text-[14px] font-semibold">
            {{ nameUser }}
          </h1>
          <div class="flex gap-3">
            <div class="flex items-center">
              <img :src="star" alt="" />
              <img :src="star" alt="" />
              <img :src="star" alt="" />
              <img :src="star" alt="" />
              <img :src="star" alt="" />
            </div>
          </div>
        </div>
        <p class="text-[#667085] text-[12px]">
          {{ timeComment }}
        </p>
      </div>
    </div>
    <div class="flex flex-col justify-center items-start gap-2">
      <div class="py-[8px] px-[16px] rounded-[8px] bg-[#F2F4F7] text-[#101828] text-[12px] leading-[20px] font-normal">
        {{ contentComment }}
      </div>
      <div v-if="defaultComment" class="flex items-center gap-[16px]">
        <div class="bg-[#EFF8FF] py-[2px] px-[8px] text-[#1570EF] text-[11px] font-medium">Đánh giá mặc định</div>
        <div class="bg-[#EFF8FF] py-[2px] px-[8px] text-[#1570EF] text-[11px] font-medium">Đánh giá mặc định</div>
        <div class="bg-[#EFF8FF] py-[2px] px-[8px] text-[#1570EF] text-[11px] font-medium">Đánh giá mặc định</div>
      </div>
    </div>
  </div>
</template>

<script>
import star from '../assets/start.svg';
import more from '../assets/more.svg';
export default {
  props: {
    contentComment: {
      type: String,
      required: true,
    },
    imgUser: {
      type: String,
      required: true,
    },
    nameUser: {
      type: String,
      required: true,
    },
    timeComment: {
      type: String,
      required: true,
    },

    defaultComment: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      star,
      more,
    };
  },
};
</script>

<style></style>
