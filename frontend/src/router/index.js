import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/login.vue';
import Register from '../views/register.vue';
import Home from '../views/Home/home.vue';
import Detail from '../views/Details/detail.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path:'/home',
    name: 'home',
    component:Home,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;