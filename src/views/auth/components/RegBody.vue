<template>
  <form @submit.prevent="handleSubmit">
    <div class="inputGroup">
      <CmInput v-model="formData.lastName" label="Họ" name="lastName" :typeUi="2" required />
      <CmInput v-model="formData.firstName" label="Tên" name="firstName" :typeUi="2" required />
    </div>

    <CmInput v-model="formData.email" label="Email" name="email" :typeUi="1" required />
    <CmInput v-model="formData.tel" label="Số điện thoại" name="tel" :typeUi="1" :activeImg="true" required />
    <CmInput v-model="formData.userName" label="Tên đăng nhập" name="userName" :typeUi="1" required />

    <div class="inputGroup">
      <CmInput
        v-model="formData.password"
        label="Mật khẩu"
        name="password"
        inputType="password"
        :showContent="true"
        :typeUi="2"
        required
      />
      <CmInput
        v-model="formData.passwordConfirm"
        label="Nhập lại mật khẩu"
        name="passwordConfirm"
        inputType="password"
        :showContent="true"
        :typeUi="2"
        required
      />
    </div>

    <CmCheckbox
      name="check"
      label='Tôi đồng ý cho " Trí Việt Test CLS 4.0s" sử dụng các thông tin trên cho mục đích học tập.'
    />

    <CmButton child="Đăng kí" type-button="submit" />
  </form>
</template>

<script>
import CmButton from '../../../commons/CmButton.vue';
import CmInput from '../../../commons/CmInput.vue';
import CmCheckbox from '@/commons/CmCheckbox.vue';

export default {
  components: {
    CmInput,
    CmButton,
    CmCheckbox,
  },
  data() {
    return {
      formData: {
        lastName: '',
        firstName: '',
        email: '',
        tel: '',
        userName: '',
        password: '',
        passwordConfirm: '',
        agree: false,
      },
    };
  },
  methods: {
    handleSubmit() {
      if (this.validateForm()) {
        console.log('Form submitted:', this.formData);
      }
    },
    validateForm() {
      return true;
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 11px;
}

.inputGroup {
  display: flex;
  gap: 8px;
}
</style>
