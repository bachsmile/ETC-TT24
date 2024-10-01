<template>
  <div class="flex items-center justify-start gap-[12px]">
    <div class="size-[40px] rounded-full overflow-hidden">
      <img :src="img" class="size-full object-cover" alt="" />
    </div>
    <div class="flex gap-2 items-center justify-start">
      <h1 class="text-[14px] font-semibold text-[#149cff]">#{{ id }}</h1>
      <h1 class="text-[14px] font-semibold text-[#101828]">
        {{ name }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
