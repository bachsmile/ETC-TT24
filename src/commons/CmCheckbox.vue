<template>
  <div class="checkboxContainer">
    <input :id="name" type="checkbox" :checked="inputValue" @change="handleChange" />
    <label class="focus::!text-[#344054]" :class="error ? '!text-red-500' : ''" :for="name"
      >{{ label }}{{ required ? '*' : '' }}</label
    >
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      inputValue: this.modelValue,
    };
  },

  watch: {
    modelValue(newValue) {
      this.inputValue = newValue; // Cập nhật khi modelValue thay đổi
    },
  },

  methods: {
    handleChange() {
      this.inputValue = !this.inputValue; // Đảo ngược giá trị checkbox
      this.$emit('input', this.inputValue);
    },
  },
};
</script>

<style scoped>
.checkboxContainer {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.checkboxContainer label {
  color: #344054;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
}

.checkboxContainer input[type='checkbox'] {
  margin-top: 0;
  margin-right: 8px;
  width: auto;
}

.error-message {
  color: #dc2626;
  font-size: 12px;
  margin-left: 8px; /* Căn lề cho thông báo lỗi */
}
</style>
