import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetail from '../views/product/ProductDetail.vue'
import RegisterView from '../views/Course/RegisterView.vue'
import SurveyView from '../views/Course/SurveyView.vue'
import LoginView from '../views/Course/LoginView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },

  {
    path: '/survey',
    name: 'survey',
    component: SurveyView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  {
    path: '/product',
    name: 'product',
    redirect: {
      name: 'product-detail'
    },
    component: () => import('@/views/product/Product.vue'),
    children: [
      {
        path: '',
        name: 'product-detail',
        component: () => import('@/views/product/ProductDetail.vue'),
      },
      {
        path: ':id',
        name: 'product-detail-id',
        component: () => import('@/views/product/ProductDetail.vue'),
      },
      {
        path: 'card/:id',
        name: 'product-detail-card',
        component: () => import('@/views/product/CardDetail.vue'),
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // Ví dụ về một navigation guard an toàn
  console.log(`Navigating from ${from.path} to ${to.path}`);
  next(); // Luôn cho phép chuyển hướng
})
router.beforeEach((to, from, next) => {
  const loggedIn = isLoggedIn();

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next("/login");
  } else if (to.path === "/login" && loggedIn) {
    next("/survey");
  } else {
    next(); 
  }
});

function isLoggedIn() {
  const token = localStorage.getItem("token");
  return !!token;
}


export default router
