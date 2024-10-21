<template>
  <div class="cls-container">
    <div class="cls-logo-container">
      <img src="@/assets/image/logo_2.png" alt="CLS Logo" class="cls-logo" />
      <h1>Cloud Learning System</h1>
    </div>
    <div class="form-container">
      <div class="form-header">
        <img src="@/assets/image/logo_1.jpg" alt="CLS Icon" class="cls-icon" />
        <h5 class="bold-text">{{ title }}</h5>
        <slot name="subheader"></slot>
      </div>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <slot></slot>
        </form>
      </ValidationObserver>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate';

export default {
  name: 'BaseForm',
  components: {
    ValidationObserver,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    onSubmit: {
      type: Function,
      required: true,
    },
  },
};
</script>
<style scope>
.form-container {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  margin-top: 0.3cm;
  margin-bottom: 0.3cm;
  margin-right: 1cm;
  margin-left: auto;
}

.form-header {
  text-align: center;
  margin-bottom: 1rem;
}

.cls-icon {
  width: 120px;
}
.cls-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1e3a8a;
  background-image: url(@/assets/image/background.jpg);
  background-size: cover;
  background-position: center;
  font-family: Arial, sans-serif;
}

.cls-logo-container {
  text-align: center;
  color: white;
  margin-right: 2rem;
  margin-left: 7.5cm;
}

.cls-logo {
  width: 400px;
  margin-bottom: 1rem;
}

.bold-text {
  font-weight: bold;
}

</style>