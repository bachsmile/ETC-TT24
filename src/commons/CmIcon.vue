<template>
  <router-link class="h-full relative" :to="path">
    <img :class="custom" class="h-full object-contain" :src="src" alt="" />
    <div
      v-if="typeIcon"
      class="size-[10px] rounded-full bg-green-500 absolute bottom-0 right-0 border border-white"
    ></div>
  </router-link>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      default: '',
    },
    custom: {
      type: String,
      default: '',
    },
    typeIcon: {
      type: Boolean,
    },
  },
};
</script>

<style></style>
