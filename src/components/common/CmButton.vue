<template>
  <button class="custom-button" @click="onClick">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
.custom-button {
  padding: 10px 20px;
  background-color: #0077fe;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.custom-button:hover {
  background-color: #0022ff;
}
</style>
