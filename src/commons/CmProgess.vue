<template>
  <div class="flex items-center gap-[8px] px-[10px] w-full">
    <div class="bg-[#f2f4f7] h-[8px] rounded-[8px] w-[90%] relative">
      <div
        class="h-full bg-[#039855] absolute top-0 bottom-0 left-0 rounded-[8px]"
        :style="{ width: ratio + '%' }"
      ></div>
    </div>
    <div class="text-[#344054] text-[14px] font-semibold ml-3 text-nowrap">
      {{ star ? star : ratio + '%' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ratio: {
      type: Number,
      default: 0,
    },
    star: {
      type: String,
      default: '',
    },
  },
};
</script>

<style></style>
