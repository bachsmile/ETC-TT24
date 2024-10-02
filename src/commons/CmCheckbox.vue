<template>
  <div class="checkboxContainer">
    <input :id="name" v-model="inputValue" type="checkbox" @change="emitValue" />
    <label :for="name">{{ label }}</label>
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
      type: String,
      default: '',
    },
  },

  data() {
    return {
      inputValue: this.modelValue,
    };
  },

  methods: {
    emitValue() {
      this.$emit('input', this.inputValue);
    },
  },
};
</script>

<style>
.checkboxContainer {
  display: flex;
  align-items: start;
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
  margin-top: 5px;
  margin-right: 8px;
  width: max-content;
}
</style>
