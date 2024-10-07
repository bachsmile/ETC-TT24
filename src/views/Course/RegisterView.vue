<template>
  <div class="cls-container">
    <div class="cls-logo-container">
      <img 
        src="@/assets/image/logo_2.png" 
        alt="CLS Logo" 
        class="cls-logo" 
      />
      <h1>Cloud Learning System</h1>
    </div>
    <div class="registration-form">
      <div class="form-header">
        <img 
          src="@/assets/image/logo_1.jpg" 
          alt="CLS Icon" 
          class="cls-icon" 
        />
        <h5 class="bold-text">
          Đăng ký
        </h5>
        <p>
          Nhanh chóng và dễ dàng
        </p>
      </div>
      <form @submit.prevent="submitForm">
        <div class="form-row">
          <div class="form-group">
            <label for="lastName">Họ*</label>
            <input 
              v-model="form.lastName" 
              type="text" 
              id="lastName" 
              placeholder="Họ" 
            />
          </div>
          <div class="form-group">
            <label for="firstName">Tên*</label>
            <input 
              v-model="form.firstName" 
              type="text" 
              id="firstName" 
              placeholder="Tên" 
            />
          </div>
        </div>
        <div class="form-group">
          <label for="email">Email*</label>
          <input 
            v-model="form.email" 
            type="email" 
            id="email" 
            placeholder="Email" 
          />
        </div>
        <div class="form-group">
          <label for="phone">Số điện thoại</label>
          <div class="phone-input">
            <span class="country-flag">
              <img 
                src="@/assets/image/laco.jpg" 
                alt="Vietnam Flag" 
                style="width: 35px; height: 20px" 
              />
            </span>
            <input 
              v-model="form.phone" 
              type="tel" 
              id="phone" 
              placeholder="Số điện thoại" 
            />
          </div>
        </div>
        <div class="form-group">
          <label for="username">Tên đăng nhập*</label>
          <input 
            v-model="form.username" 
            type="text" 
            id="username" 
            placeholder="Tên đăng nhập" 
          />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="password">Nhập mật khẩu*</label>
            <div class="password-input">
              <input 
                v-model="form.password" 
                :type="showPassword ? 'text' : 'password'" 
                id="password" 
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
                v-model="form.confirmPassword" 
                :type="showConfirmPassword ? 'text' : 'password'" 
                id="confirmPassword" 
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
            <input 
              type="checkbox" 
              v-model="form.agreement" 
            />
            <span class="checkmark"></span>
            <span class="agreement-text">
              Tôi đồng ý cho "Trí Việt Test CLS 4.0s" 
              sử dụng các thông tin trên cho mục đích học tập.
            </span>
          </label>
        </div>

        <button 
          type="submit" 
          class="submit-btn"
        >
          Đăng ký
        </button>
      </form>
      <p class="login-link">
        Bạn đã có tài khoản?
        <router-link to="/login">Đăng nhập ngay</router-link>
      </p>
    </div>
  </div>
</template>

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

        
        this.$router.push("/login");
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

.registration-form {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  margin-top: 0.5cm;
  margin-bottom: 0.5cm;
  margin-right: 1.0cm;
  margin-left: auto;
}

.form-header {
  text-align: center;
  margin-bottom: 1rem;
}

.cls-icon {
  width: 120px;
}

.form-row {
  display: flex;
  gap: 1rem;
}

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

.phone-input {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 28.48px;
}

.country-flag {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: #f0f0f0;
  height: 100%;
  width: 40px; 
}

.country-flag img {
  height: 26px; 
  width: 35px; 
  object-fit: contain; 
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
  padding: 0.5rem; 
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.95rem; 
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

.agreement-text {
  font-weight: normal;
  font-size: 0.9em;
}
</style>
