<template>
  <BaseForm title="Đăng ký" :onSubmit="submitForm">
    <template #subheader>
      <p>Nhanh chóng và dễ dàng</p>
    </template>

    <div class="form-row">
      <FormInput
        id="lastName"
        label="Họ*"
        v-model="form.lastName"
        rules="required"
        placeholder="Họ"
      />
      <FormInput
        id="firstName"
        label="Tên*"
        v-model="form.firstName"
        rules="required"
        placeholder="Tên"
      />
    </div>

    <FormInput
      id="email"
      label="Email*"
      type="email"
      v-model="form.email"
      rules="required|email"
      placeholder="Email"
    />

    <div class="form-group">
      <label>Số điện thoại*</label>
      <ValidationProvider
        name="Số điện thoại"
        rules="required"
        v-slot="{ errors }"
      >
        <div class="phone-input">
          <span class="country-flag">
            <img
              src="@/assets/image/laco.jpg"
              alt="Vietnam Flag"
              style="width: 35px; height: 20px"
            />
            <input
              v-model="form.phone"
              type="tel"
              id="phone"
              placeholder="Số điện thoại"
            />
          </span>
        </div>
        <span class="error-message">{{ errors[0] }}</span>
      </ValidationProvider>
    </div>

    <FormInput
      id="username"
      label="Tên đăng nhập*"
      v-model="form.username"
      rules="required"
      placeholder="Tên đăng nhập"
    />

    <div class="form-row">
      <FormInput
        id="password"
        label="Nhập mật khẩu*"
        type="password"
        v-model="form.password"
        rules="required|min:6"
        ref="password"
        name="password"
      />

      <FormInput
        id="confirmPassword"
        label="Nhập lại mật khẩu*"
        type="password"
        v-model="form.confirmPassword"
        :rules="{ required: true, password_confirmation: form.password }"
        name="password_confirmation"
      />
    </div>

   <CheckboxInput
      id="agreement"
      label="Đồng ý"
      name="Đồng ý"
      rules="required"
      v-model="form.agreement"
    >
      Tôi đồng ý cho "Trí Việt Test CLS 4.0s" sử dụng các thông tin trên
      cho mục đích học tập.
    </CheckboxInput>

    <SubmitButton>Đăng ký</SubmitButton>

    <template #footer>
      <p class="login-link">
        Bạn đã có tài khoản?
        <router-link to="/login">Đăng nhập ngay</router-link>
      </p>
    </template>
  </BaseForm>
</template>

<script>
import axios from "axios";
import { ValidationProvider, extend } from "vee-validate";
import { required, email, min, confirmed } from "vee-validate/dist/rules";
import BaseForm from "./componentRegisterLogin/BaseForm.vue";
import FormInput from "./componentRegisterLogin/FormInput.vue";
import SubmitButton from "./componentRegisterLogin/SubmitButton.vue";
import CheckboxInput from "./componentRegisterLogin/CheckboxInput.vue";
extend("required", {
  ...required,
  message: "Vui lòng không để trống",
});
extend("email", {
  ...email,
  message: "Email không hợp lệ",
});
extend("min", {
  ...min,
  message: "Trường này phải có ít nhất {length} ký tự",
});
extend("password_confirmation", {
  params: ["target"],
  validate(value, { target }) {
    return value === target;
  },
  message: "Xác nhận mật khẩu không khớp",
});

export default {
  name: "RegistrationForm",
  components: {
    BaseForm,
    FormInput,
    SubmitButton,
    ValidationProvider,
    CheckboxInput,
  },
  data() {
    return {
      form: {
        lastName: "",
        firstName: "",
        email: "",
        phone: "",
        username: "",
        password: "",
        confirmPassword: "",
        agreement: false,
      },
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        LastName: this.form.lastName,
        FirstName: this.form.firstName,
        Email: this.form.email,
        Phone: this.form.phone,
        Username: this.form.username,
        Password: this.form.password,
      };

      try {
        const response = await axios.post(
          "https://localhost:44347/api/Registration",
          userData
        );
        console.log("Đăng ký thành công:", response.data);
        alert("Đăng ký thành công!");
        this.resetForm();
        this.$router.push("/login");
      } catch (error) {
        if (error.response) {
          const errorMessage =
            error.response.data.message ||
            "Vui lòng điền đầy đủ thông tin cần thiết.";
          console.error("Có lỗi xảy ra:", errorMessage);
          alert("Không được để trống ô: " + errorMessage);
        } else {
          console.error("Có lỗi mạng:", error);
          alert("Lỗi mạng. Vui lòng thử lại.");
        }
      }
    },
    resetForm() {
      Object.keys(this.form).forEach((key) => {
        this.form[key] = key === "agreement" ? false : "";
      });
    },
  },
};
</script>

<style scoped>
.form-row {
  display: flex;
  gap: 1rem;
}

.phone-input {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 28.48px;
  width: 336px;
}

input#phone {
  width: 295px;
  height: 25px;
  border: none;
}

.country-flag {
  display: flex;
  align-items: center;

  padding: 0;
  background-color: #f0f0f0;
  height: 100%;
  width: 40px;
}

.checkbox-container {
  display: flex;
  align-items: center;
  user-select: none;
}

.login-link {
  text-align: center;
  margin-top: 1rem;
}

.login-link a {
  color: #3b82f6;
  text-decoration: none;
}

.agreement-text {
  font-weight: normal;
  font-size: 0.9em;
}
</style>