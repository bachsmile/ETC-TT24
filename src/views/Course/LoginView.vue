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
        <h5 class="bold-text">Đăng nhập</h5>
      </div>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="username">Tên đăng nhập*</label>
          <input 
            type="text" 
            id="username" 
            v-model="form.username" 
            placeholder="Tên đăng nhập" 
          />
        </div>
        <div class="form-group">
          <label for="password">Nhập mật khẩu*</label>
          <div class="password-input">
            <input 
              :type="showPassword ? 'text' : 'password'" 
              id="password" 
              v-model="form.password" 
              placeholder="" 
            />
            <button 
              type="button" 
              @click="togglePassword('password')" 
              class="toggle-password"
            >
              <i 
                :class="showPassword ? 'eye-open' : 'eye-closed'"
              ></i>
            </button>
          </div>
         
        </div>

        <button 
          type="submit" 
          class="submit-btn"
        >
          Đăng nhập
        </button>
        <div class="login-link">
  <label @click="$router.push('/register')">
    <img src="@/assets/image/add.png" alt="create new acc" class="add-icon" />
    <span>Tạo tài khoản mới</span>
  </label>
 
</div>
      </form>
    </div>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.7/axios.min.js"
  integrity="sha512-DdX/YwF5e41Ok+AI81HI8f5/5UsoxCVT9GKYZRIzpLxb8Twz4ZwPPX+jQMwMhNQ9b5+zDEefc+dcvQoPWGNZ3g=="
  crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      showPassword: false,
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    async submitForm() {
      try {
        const response = await axios.post(
          "https://localhost:44347/api/Users/Login",
          this.form
        );
        console.log("Đăng nhập thành công:", response.data);

        // Lưu token và đánh dấu người dùng đã đăng nhập
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("isLoggedIn", "true");

        // Chuyển hướng đến trang khảo sát
        this.$router.push("/survey");
      } catch (error) {
        if (error.response) {
          console.error("Lỗi đăng nhập:", error.response.data);
          alert("Lỗi đăng nhập: " + error.response.data);
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
  margin-right: 7.0cm;
  margin-left: auto;
}

.form-header {
  text-align: center;
  margin-bottom: 1rem;
}

.cls-icon {
  width: 120px;
}

.form-group {
  margin-bottom: 0.7rem;
  height: 70px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.2rem;
  font-size: 0.95rem;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 0.3rem 0.5rem; 
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.95rem; 
  line-height: 1.5; 
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

.eye-open::before {
  content: "👁️";
}

.eye-closed::before {
  content: "👁️‍🗨️";
}
.login-link {
  text-align: center;
  margin-top: 1rem;
}

.login-link label {
  color: rgb(72, 71, 71);
  text-decoration: none;
  cursor: pointer;
}
</style>
