
<template>
  <div :class="wrapperClass">
    <label :class="inputWrapperClass">
      <input 
        type="checkbox" 
        :id="id" 
        :name="name"
        v-model="localModelValue"
      />
      <span class="checkmark"></span>
      <span class="agreement-text">
        <slot></slot>
      </span>
    </label>
    <span v-if="errorMessage" class="error-message">{{ errorMessage }}</span>
  </div>
</template>

<script>
export default {
  name: 'CheckboxInput',
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    rules: {
      type: [String, Object],
      default: ''
    },
    wrapperClass: {
      type: String,
      default: 'form-group'
    },
    inputWrapperClass: {
      type: String,
      default: 'checkbox-container'
    },
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  emits: ['update:modelValue'],
  computed: {
    localModelValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    }
  },
  data() {
    return {
      errorMessage: ''
    };
  },
  methods: {
    validate() {
      // Implement validation logic here
      // For example:
      if (this.rules.includes('required') && !this.localModelValue) {
        this.errorMessage = 'This field is required';
        return false;
      }
      this.errorMessage = '';
      return true;
    }
  }
}
</script>

<style scoped>
.checkbox-container {
  display: flex;
  align-items: center;
  user-select: none;
}

.agreement-text {
  font-weight: normal;
  font-size: 0.9em;
}

.error-message {
  color: red;
  font-size: 0.8em;
  margin-top: 0.2em;
}
</style>