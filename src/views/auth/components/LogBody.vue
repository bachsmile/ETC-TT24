<template>
  <form @submit.prevent="handleSubmit">
    <CmInput
      v-model="formData.userName"
      :error="errors.userName"
      label="Tên đăng nhập"
      name="userName"
      :typeUi="1"
      required
    />

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

    <div class="my-6">
      <div class="items-center flex justify-center gap-3 mb-3">
        <div class="w-full h-[1px] bg-[#d0d5dd]"></div>
        <div class="font-bold text-[14px] text-[#344054]">Hoặc</div>
        <div class="w-full h-[1px] bg-[#d0d5dd]"></div>
      </div>
      <div class="flex justify-center items-center gap-3">
        <div class="border-active">
          <CmIcon
            custom="size-[50px] p-1 rouded-[8px]"
            src="https://i.pinimg.com/564x/ca/c7/f6/cac7f6edc4a990bc31773f9dac53baf4.jpg"
          />
        </div>
        <div class="border-active">
          <CmIcon
            custom="size-[50px] p-1 rouded-[8px]"
            src="https://i.pinimg.com/564x/bf/70/a6/bf70a612edf2ce2b7b80865989d6df0a.jpg"
          />
        </div>
        <div class="border-active">
          <CmIcon
            custom="size-[50px] p-1 rouded-[8px]"
            src="https://i.pinimg.com/564x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg"
          />
        </div>
      </div>
    </div>

    <CmButton child="Đăng nhập" type-button="submit" />
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { object, string } from 'yup';
import CmButton from '../../../commons/CmButton.vue';
import CmInput from '../../../commons/CmInput.vue';
import CmIcon from '@/commons/CmIcon.vue';

const loginFormSchema = object().shape({
  userName: string().required('Tên đăng nhập là bắt buộc'),
  password: string().required('Mật khẩu là bắt buộc'),
});

export default {
  components: {
    CmIcon,
    CmInput,
    CmButton,
  },
  data() {
    return {
      formData: {
        userName: '',
        password: '',
      },
      errors: {},
    };
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated', 'authError']),
  },
  watch: {
    authError(newError) {
      if (newError) {
        console.error('Authentication error:', newError);
      }
    },
  },
  methods: {
    ...mapActions('auth', ['loginUser']),
    async validateForm() {
      try {
        await loginFormSchema.validate(this.formData, { abortEarly: false });
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
          await this.loginUser(this.formData);
          if (this.isAuthenticated) {
            this.$router.push('/');
          }
        } catch (error) {
          console.error('Login failed:', error);
        }
      }
    },
  },
};
</script>

<style scoped>
.border-active {
  border: 0.5px solid #a8a7a725 !important;
  transition: all 0.2s linear;
}

.border-active:hover {
  box-shadow: rgba(149, 157, 165, 0.704) 0px 8px 24px;
}

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
