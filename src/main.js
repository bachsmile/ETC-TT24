import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';

new Vue({
  router, // Đảm bảo rằng router đã được truyền vào đây
  render: h => h(App),
}).$mount('#app');
