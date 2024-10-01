import Vue from 'vue';
import VueRouter from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: MainLayout,
    redirect: '/courses',
    children: [
      {
        path: 'courses',
        component: () => import('@/views/home/HomePage.vue'),
        redirect: '/courses/about',
        children: [
          {
            path: 'about',
            components: {
              courseContent: () => import('@/views/home/components/Course/CourseAbout.vue'),
            },
          },
          {
            path: 'content',
            components: {
              courseContent: () => import('@/views/home/components/Course/CourseContent.vue'),
            },
          },
          {
            path: 'document',
            components: {
              courseContent: () => import('@/views/home/components/Course/CourseDoc.vue'),
            },
          },
          {
            path: 'result',
            components: {
              courseContent: () => import('@/views/home/components/Course/CourseResults.vue'),
            },
          },
          {
            path: 'vote',
            component: () => import('@/views/home/components/HomeVote.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/auth/RegisterPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
