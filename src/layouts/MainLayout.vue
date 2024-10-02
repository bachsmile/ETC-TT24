<template>
  <div class="p-[50px] bg-[#F9FAFB] flex flex-col gap-[25px] overflow-hidden">
    <HeaderLayout />
    <Location />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import HeaderLayout from './components/Header.vue';
import Location from './components/Location.vue';

export default {
  components: {
    HeaderLayout,
    Location,
  },
};
</script>

<style></style>
