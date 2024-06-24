import { createRouter, createWebHistory } from 'vue-router';

import MainView from '../views/MainView.vue';
import TimeTableView from '@/views/TimeTableView.vue';
import Tabling from '@/components/tablings/Tabling.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
    },
    {
      path: '/timetable',
      name: 'timetable',
      component: TimeTableView,
    },
    { path: '/tabling', name: 'tabling', component: Tabling },
  ],
});

export default router;
