<template>
  <div class="application" >
    <span>{{ label }}</span>
  </div>
</template>

<script>
// import Icon from './'; // Nhập component Icon

export default {
  name: 'Application',
  components: {
    // Icon // Đăng ký component Icon
  },
  props: {
    label: {
      type: String,
      required: true
    }
  },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style scoped>
.application {
  cursor: pointer;
  /* Thêm bất kỳ CSS nào bạn muốn ở đây */
}
</style>
