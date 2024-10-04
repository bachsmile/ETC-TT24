<template>
  <div class="cls-container">
    <div class="cls-logo-container">
      <img src="" alt="CLS Logo" class="cls-logo" />
      <h1>Cloud Learning System</h1>
    </div>
    <div class="registration-form">
      <div class="form-header">
        <img src="../views/img/Untitled.png" alt="CLS Icon" class="cls-icon" />
        <h5 class="bold-text">Đăng ký</h5>
        <p>Nhanh chóng và dễ dàng</p>
      </div>
      <form @submit.prevent="submitForm">
        <div class="form-row">
          <div class="form-group">
            <label for="lastName">Họ*</label>
            <input
              type="text"
              id="lastName"
              v-model="form.lastName"
              required
              placeholder="Họ"
            />
          </div>
          <div class="form-group">
            <label for="firstName">Tên*</label>
            <input
              type="text"
              id="firstName"
              v-model="form.firstName"
              required
              placeholder="Tên"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="email">Email*</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          <label for="phone">Số điện thoại</label>
          <div class="phone-input">
            <span class="country-flag">
              <svg
                width="36"
                height="24"
                viewBox="0 0 36 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.919922" width="35.08" height="24" fill="#DA251D" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.4598 15.0666L14.2302 17.9752L15.7223 13.1012L11.6161 10.0247L16.768 9.92099L18.4598 5.11108L20.1517 9.92099L25.3035 10.0247L21.1973 13.1012L22.6895 17.9752L18.4598 15.0666Z"
                  fill="#FFFF00"
                />
              </svg>
            </span>
            <input
              type="tel"
              id="phone"
              v-model="form.phone"
              placeholder="Số điện thoại"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="username">Tên đăng nhập*</label>
          <input
            type="text"
            id="username"
            v-model="form.username"
            required
            placeholder="Tên đăng nhập"
          />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="password">Nhập mật khẩu*</label>
            <div class="password-input">
              <input
                :type="showPassword ? 'text' : 'password'"
                id="password"
                v-model="form.password"
                required
                placeholder=""
              />
              <button
                type="button"
                @click="togglePassword('password')"
                class="toggle-password"
              >
                <i :class="showPassword ? 'eye-open' : 'eye-closed'"></i>
              </button>
            </div>
          </div>
          <div class="form-group">
            <label for="confirmPassword">Nhập lại mật khẩu*</label>
            <div class="password-input">
              <input
                :type="showConfirmPassword ? 'text' : 'password'"
                id="confirmPassword"
                v-model="form.confirmPassword"
                required
                placeholder=""
              />
              <button
                type="button"
                @click="togglePassword('confirmPassword')"
                class="toggle-password"
              >
                <i :class="showConfirmPassword ? 'eye-open' : 'eye-closed'"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="checkbox-container">
            <input type="checkbox" v-model="form.agreement" />
            <span class="checkmark"></span>
            Tôi đồng ý cho "Trí Việt Test CLS 4.0s" sử dụng các thông tin trên
            cho mục đích học tập.
          </label>
        </div>
        <button type="submit" class="submit-btn">Đăng ký</button>
      </form>
      <p class="login-link">
        Bạn đã có tài khoản? <a href="#">Đăng nhập ngay</a>
      </p>
    </div>
  </div>
</template>

<script
  src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.7/axios.min.js"
  integrity="sha512-DdX/YwF5e41Ok+AI81HI8f5/5UsoxCVT9GKYZRIzpLxb8Twz4ZwPPX+jQMwMhNQ9b5+zDEefc+dcvQoPWGNZ3g=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>
<script>
import axios from "axios";
export default {
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
      showPassword: false,
      showConfirmPassword: false,
    };
  },
  methods: {
    togglePassword(field) {
      if (field === "password") {
        this.showPassword = !this.showPassword;
      } else if (field === "confirmPassword") {
        this.showConfirmPassword = !this.showConfirmPassword;
      }
    },
    async submitForm() {
      if (this.form.password !== this.form.confirmPassword) {
        alert("Mật khẩu và xác nhận mật khẩu không khớp!");
        return;
      }

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
      } catch (error) {
        if (error.response) {
          console.error("Có lỗi xảy ra:", error.response.data);
          alert("Lỗi: " + error.response.data);
        } else {
          console.error("Có lỗi mạng:", error);
          alert("Lỗi mạng. Vui lòng thử lại.");
        }
      }
    },
    resetForm() {
      this.form.lastName = "";
      this.form.firstName = "";
      this.form.email = "";
      this.form.phone = "";
      this.form.username = "";
      this.form.password = "";
      this.form.confirmPassword = "";
      this.form.agreement = false;
    },
  },
};
</script>
<style scoped>
.cls-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1e3a8a;
  background-image: url("");
  background-size: cover;
  font-family: Arial, sans-serif;
}

.cls-logo-container {
  text-align: center;
  color: white;
  margin-right: 2rem;
  margin-left: 5.5cm;
}

.cls-logo {
  width: 400px;
  margin-bottom: 1rem;
}

.registration-form {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  margin-top: 1.5cm;
  margin-bottom: 1.5cm;
  margin-right: 1.5cm;
  margin-left: auto;
}

.form-header {
  text-align: center;
  margin-bottom: 1rem;
}

.cls-icon {
  width: 140px;
}

.form-row {
  display: flex;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="password"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.phone-input {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.country-flag {
  padding: 0.5rem;
  background-color: #f0f0f0;
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

.checkbox-container {
  display: flex;
  align-items: center;
  user-select: none;
}

.submit-btn {
  width: 100%;
  padding: 0.75rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-link {
  text-align: center;
  margin-top: 1rem;
}

.login-link a {
  color: #3b82f6;
  text-decoration: none;
}
.bold-text {
  font-weight: bold;
}
</style>
