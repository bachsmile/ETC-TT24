<template>
  <div class="flex justify-between gap-[25px]">
    <HomeLeft />
    <HomeRight />
  </div>
</template>

<script>
import HomeLeft from './components/HomeLeft.vue';
import HomeRight from './components/HomeRight.vue';

export default {
  components: {
    HomeLeft,
    HomeRight,
  },
};
</script>

<style></style>
