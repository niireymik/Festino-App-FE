import { createRouter, createWebHistory } from 'vue-router';

import MainView from '../views/MainView.vue';
import TimeTableView from '@/views/TimeTableView.vue';
import TablingView from '@/views/TablingView.vue';
import NotificationView from '@/views/NotificationView.vue';
import NoticeView from '@/views/NoticeView.vue';
import BoothView from '@/views/BoothView.vue';
import BoothDetailView from '@/views/BoothDetailView.vue';
import OrderMainView from '@/views/orders/OrderMainView.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import OrderLayout from '@/layouts/OrderLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'main',
          component: MainView,
        },
        {
          path: 'timetable',
          name: 'timetable',
          component: TimeTableView,
        },
        { path: 'reserve', name: 'tabling', component: TablingView },
        {
          path: 'notification',
          name: 'notification',
          component: NotificationView,
        },
        {
          path: 'booth',
          name: 'booth',
          component: BoothView,
        },
        {
          path: 'booth/detail',
          name: 'booth-detail',
          component: BoothDetailView,
        },
        {
          path: '/notice',
          name: 'notice',
          component: NoticeView,
        },
      ],
    },
    {
      path: '/order',
      component: OrderLayout,
      children: [{ path: '', name: 'order-main', component: OrderMainView }],
    },
  ],
});

export default router;
