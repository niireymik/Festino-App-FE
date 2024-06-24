import { createRouter, createWebHistory } from 'vue-router';

import MainView from '../views/MainView.vue';
import TimeTableView from '@/views/TimeTableView.vue';
import TablingView from '@/views/TablingView.vue';

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
    { path: '/reserve', name: 'tabling', component: TablingView },
  ],
});

export default router;
