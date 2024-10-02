<template>
  <div class="flex-[0_0_70%]">
    <HomeAuthor />
    <CoursesRelated />
    <HomeVote />
  </div>
</template>

<script>
import HomeAuthor from './HomeAuthor.vue';
import CoursesRelated from './Course/CoursesRelated.vue';
import HomeVote from './HomeVote.vue';

export default {
  components: {
    HomeAuthor,
    CoursesRelated,
    HomeVote,
  },
};
</script>

<style></style>
