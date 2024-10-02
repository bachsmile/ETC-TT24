import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetail from '../views/product/ProductDetail.vue'
import RegisterView from '../views/Course/RegisterView.vue'  
import SurveyView from  '../views/Course/SurveyView.vue' 

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
    component: SurveyView 
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

export default router
