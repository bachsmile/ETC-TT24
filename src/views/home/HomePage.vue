<template>
  <div class="w-full">
    <div v-if="getCourse" class="flex justify-between gap-[25px]">
      <HomeLeft />
      <HomeRight />
    </div>
    <div v-else class="">
      <CmLoading />
    </div>
  </div>
</template>

<script>
import HomeLeft from './components/HomeLeft.vue';
import HomeRight from './components/HomeRight.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    HomeLeft,
    HomeRight,
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters('course', ['getCourse']),
  },

  methods: {
    ...mapActions('course', ['fetchCourseById']),
  },
  async created() {
    await this.fetchCourseById(3);
  },
};
</script>

<style></style>
