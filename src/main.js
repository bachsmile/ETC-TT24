import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/main.css';
import './assets/css/tailwind.css';

new Vue({
  store,
  router, // Đảm bảo rằng router đã được truyền vào đây
  render: h => h(App),
}).$mount('#app');
