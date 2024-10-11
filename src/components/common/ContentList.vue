<template>
  <ul class="ctdt-List">
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: "ContentList",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.ctdt-List {
  list-style-type: none; /* Bỏ dấu đầu dòng */
  padding: 0; /* Bỏ padding */
}
</style>
