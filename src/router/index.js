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
              courseContent: () =>
                import('@/views/home/components/Course/CourseAbout.vue'),
            },
          },
          {
            path: 'content',
            components: {
              courseContent: () =>
                import('@/views/home/components/Course/CourseContent.vue'),
            },
          },
          {
            path: 'document',
            components: {
              courseContent: () =>
                import('@/views/home/components/Course/CourseDoc.vue'),
            },
          },
          {
            path: 'result',
            components: {
              courseContent: () =>
                import('@/views/home/components/Course/CourseResults.vue'),
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
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth/LoginPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isPublicRoute = to.path === '/login' || to.path === '/register';
  const isAuthenticated = isLoggedIn();

  if (!isAuthenticated && !isPublicRoute) {
    next('/login');
  } else if (isAuthenticated && isPublicRoute) {
    next('/');
  } else {
    next();
  }
});

function isLoggedIn() {
  const token = localStorage.getItem('token');
  return !!token;
}

export default router;
