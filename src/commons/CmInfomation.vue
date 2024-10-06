<template>
  <div class="px-[10px] flex flex-col gap-[12px]">
    <div v-for="(item, index) in content" :key="index" class="flex items-center gap-[10px]">
      <div class="h-[18px] w-[18px]">
        <img class="size-full" :src="item.src" alt="" />
      </div>
      <div>
        <h1 class="text-[#344054] text-[14px] font-normal">
          {{ item.content }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
