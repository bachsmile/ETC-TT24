<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <ValidationProvider :name="label" :rules="rules" v-slot="{ errors }">
      <div v-if="type === 'password'" class="password-input">
        <input
          :id="id"
          :type="showPassword ? 'text' : 'password'"
          v-model="innerValue"
          :placeholder="placeholder"
        />
        <button
          type="button"
          @click="togglePassword"
          class="toggle-password"
        >
          <i :class="showPassword ? 'eye-open' : 'eye-closed'"></i>
        </button>
      </div>
      <input
        v-else
        :id="id"
        :type="type"
        v-model="innerValue"
        :placeholder="placeholder"
      />
      <span class="error-message">{{ errors[0] }}</span>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {
  name: 'FormInput',
  components: {
    ValidationProvider,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    rules: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      showPassword: false,
      innerValue: this.value,
    };
  },
  watch: {
    innerValue(newValue) {
      this.$emit('input', newValue);
    },
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
<style scope>
.form-group {
  margin-bottom: 0.7rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.2rem;
  font-size: 0.95rem;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="password"] {
  width: 100%;
  padding: 0.3rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
  line-height: 1.2;
}

.password-input {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
}

.error-message {
  color: red;
  font-size: 0.8rem;
  margin-top: 0.2rem;
  display: block;
}

.eye-open::before {
  content: "👁️";
}

.eye-closed::before {
  content: "👁️‍🗨️";
}

</style>