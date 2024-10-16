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
    id: {
      type: Number,
      default: null
    }
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
  background-color: #4c9bf6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.custom-button:hover {
  background-color: #4ea5f7;
}
</style>
