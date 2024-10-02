<template>
  <button :type="typeButton">
    {{ child }}
  </button>
</template>

<script>
export default {
  props: {
    child: {
      type: String,
      default: '',
    },
    typeButton: {
      type: String,
      default: 'button',
    },
  },
};
</script>

<style scoped>
button {
  width: 100%;
  height: 100%;
  max-height: 40px;
  padding: 10px 18px;
  border-radius: 8px;
  background-color: #1570ef !important;
  color: white;
  border: 1px solid #1570ef;
}
</style>
