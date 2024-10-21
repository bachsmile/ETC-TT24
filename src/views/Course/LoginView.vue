<template>
  <BaseForm title="Đăng nhập" :onSubmit="submitForm">
    <FormInput
      id="username"
      label="Tên đăng nhập*"
      v-model="form.username"
      placeholder="Tên đăng nhập"
      rules="required"
    />
    
    <FormInput
      id="password"
      label="Nhập mật khẩu*"
      type="password"
      v-model="form.password"
      rules="required|min:6"
    />

    <SubmitButton>Đăng nhập</SubmitButton>

    <template #footer>
      <div class="login-link">
        <label @click="$router.push('/register')">
          <img
            src="@/assets/image/add.png"
            alt="create new acc"
            class="add-icon"
          />
          <span>Tạo tài khoản mới</span>
        </label>
      </div>
    </template>
  </BaseForm>
</template>

<script>
import axios from "axios";
import BaseForm from './componentRegisterLogin/BaseForm.vue';
import FormInput from './componentRegisterLogin/FormInput.vue';
import SubmitButton from './componentRegisterLogin/SubmitButton.vue';
import { extend } from 'vee-validate';
import { required, min } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'Vui lòng không để trống'
});

extend('min', {
  ...min,
  message: 'Trường này phải có ít nhất {length} ký tự'
});

export default {
  components: {
    BaseForm,
    FormInput,
    SubmitButton,
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post(
          "https://localhost:44347/api/Users/Login",
          this.form
        );
        console.log("Đăng nhập thành công:", response.data);

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("isLoggedIn", "true");

        this.$router.push("/survey");
      } catch (error) {
        if (error.response) {
          const errorMessage =
            error.response.data.message || "Lỗi đăng nhập không xác định.";
          console.error("Lỗi đăng nhập:", errorMessage);
          alert("Lỗi đăng nhập: " + errorMessage);
        } else {
          console.error("Lỗi mạng:", error);
          alert("Lỗi mạng. Vui lòng thử lại.");
        }
      }
    },
  },
};
</script>

<style scoped>

.form-container {
  margin-right: 7cm;
}

.form-group {
  margin-bottom: 0.7rem;
  height: 70px;
}

.login-link {
  text-align: center;
  margin-top: 1rem;
}

.login-link label {
  color: rgb(72, 71, 71);
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>