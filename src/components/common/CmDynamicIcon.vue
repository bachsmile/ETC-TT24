<template>
  <div v-html="svgMarkup" class="dynamic-icon"></div>
</template>

<script>
export default {
  name: "DynamicIcon",
  props: {
    svgMarkup: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.dynamic-icon {
  width: 32px; /* You can adjust the size here */
  height: 32px; /* You can adjust the size here */
}
</style>
