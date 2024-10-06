import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './globalComponents';
import './assets/css/main.css';
import './assets/css/tailwind.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { initializeAuth } from '@/utils/auth';

// Cấu hình toastr (tùy chọn)
toastr.options = {
  closeButton: true,
  progressBar: true,
  positionClass: 'toast-top-right',
};

Vue.prototype.$toastr = toastr;

// Khởi tạo xác thực trước khi tạo instance Vue
initializeAuth()
  .then(() => {
    new Vue({
      store,
      router,
      render: h => h(App),
    }).$mount('#app');
  })
  .catch(error => {
    console.error('Lỗi khi khởi tạo xác thực:', error);
    // Trong trường hợp lỗi, vẫn tạo instance Vue để ứng dụng có thể chạy
    new Vue({
      store,
      router,
      render: h => h(App),
    }).$mount('#app');
  });
