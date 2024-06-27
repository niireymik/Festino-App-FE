import { createRouter, createWebHistory } from 'vue-router';

import MainView from '../views/MainView.vue';
import TimeTableView from '@/views/TimeTableView.vue';
import TablingView from '@/views/TablingView.vue';
import NotificationView from '@/views/NotificationView.vue';
import BoothView from '@/views/BoothView.vue';

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
    {
      path: '/notification',
      name: 'notification',
      component: NotificationView,
    },
    {
      path: '/booth',
      name: 'booth',
      component: BoothView,
    },
  ],
});

export default router;
