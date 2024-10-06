<template>
  <form @submit.prevent="handleSubmit">
    <div class="inputGroup">
      <CmInput v-model="formData.lastName" :error="errors.lastName" label="Họ" name="lastName" :typeUi="2" required />
      <CmInput
        v-model="formData.firstName"
        :error="errors.firstName"
        label="Tên"
        name="firstName"
        :typeUi="2"
        required
      />
    </div>

    <CmInput
      v-model="formData.emailAddress"
      :error="errors.emailAddress"
      label="Email"
      name="email"
      :typeUi="1"
      required
    />
    <CmInput
      v-model="formData.numberPhone"
      :error="errors.numberPhone"
      label="Số điện thoại"
      name="tel"
      :typeUi="1"
      :activeImg="true"
      required
    />
    <CmInput
      v-model="formData.userName"
      :error="errors.userName"
      label="Tên đăng nhập"
      name="userName"
      :typeUi="1"
      required
    />

    <div class="inputGroup">
      <CmInput
        v-model="formData.password"
        :error="errors.password"
        label="Mật khẩu"
        name="password"
        inputType="password"
        :showContent="true"
        :typeUi="2"
        required
      />
      <CmInput
        v-model="formData.passwordConfirm"
        :error="errors.passwordConfirm"
        label="Nhập lại mật khẩu"
        name="passwordConfirm"
        inputType="password"
        :showContent="true"
        :typeUi="2"
        required
      />
    </div>

    <CmCheckbox
      v-model="formData.agree"
      name="agree"
      label='Tôi đồng ý cho " Trí Việt Test CLS 4.0s" sử dụng các thông tin trên cho mục đích học tập.'
      :error="errors.agree"
      required
    />

    <CmButton child="Đăng kí" type-button="submit" />
    <p v-if="authError">
      {{ authError }}
    </p>
  </form>
</template>

<script>
import CmButton from '../../../commons/CmButton.vue';
import CmInput from '../../../commons/CmInput.vue';
import CmCheckbox from '@/commons/CmCheckbox.vue';
import { object, string, ref, boolean } from 'yup';
import { mapActions, mapGetters } from 'vuex';

const registerFormSchema = object().shape({
  lastName: string().required('Họ là bắt buộc'),
  firstName: string().required('Tên là bắt buộc'),
  emailAddress: string().email('Email không hợp lệ').required('Email là bắt buộc'),
  numberPhone: string()
    .matches(/^[0-9]{10,11}$/, 'Số điện thoại không hợp lệ')
    .required('Số điện thoại là bắt buộc'),
  userName: string().required('Tên đăng nhập là bắt buộc'),
  password: string().required('Mật khẩu là bắt buộc'),
  passwordConfirm: string()
    .oneOf([ref('password'), null], 'Mật khẩu không khớp')
    .required('Vui lòng xác nhận mật khẩu'),
  agree: boolean().oneOf([true], 'Bạn phải đồng ý với các điều khoản'),
});

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
        emailAddress: '',
        numberPhone: '',
        userName: '',
        password: '',
        passwordConfirm: '',
        agree: false,
      },
      errors: {},
    };
  },
  computed: {
    ...mapGetters('auth', ['authError']),
  },

  methods: {
    ...mapActions('auth', ['registerUser']),
    async validateForm() {
      try {
        await registerFormSchema.validate(this.formData, { abortEarly: false });
        this.errors = {};
        return true;
      } catch (error) {
        this.errors = error.inner.reduce((acc, err) => {
          acc[err.path] = err.message;
          return acc;
        }, {});
        return false;
      }
    },
    async handleSubmit() {
      const isValid = await this.validateForm();

      if (isValid) {
        try {
          const res = await this.registerUser(this.formData);

          if (res.status === 201) {
            this.$router.push('/login');
          }
        } catch (error) {
          console.error('Registration failed:', error);
        }
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.inputGroup {
  display: flex;
  gap: 7px;
}
</style>
