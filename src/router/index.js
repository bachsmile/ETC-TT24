import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetail from '../views/product/ProductDetail.vue'
import learningContent from '../components/learningContent.vue'
import RegisterView from '../components/RegisterView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
  {
    path: '/learning',
    name:'learningCource',
    component: learningContent
  },

  {
    path: '/register',
    name:'RegisterView',
    component: RegisterView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
