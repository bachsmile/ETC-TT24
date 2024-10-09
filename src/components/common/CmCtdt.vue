<template>
  <div class="ctdt">
    <ul class="ctdt-List">
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Ctdt",
  props: {
    // Accept an array of items as a prop
    items: {
      type: Array,
      required: true, // Ensure items prop is passed from the parent
    },
  },
};
</script>

<style scoped>
.ctdt {
  margin-top: 20px;
}

.ctdt-List {
  list-style-type: none;
  padding-left: 0;
}

.ctdt-List li {
  display: block;
  padding: 8px 0;
  color: #0056b3;
  text-decoration: none;
  font-size: 14px;
  margin-left: 20px;
}

.ctdt-List li:hover {
  text-decoration: underline;
  color: #003d99;
}
</style>
