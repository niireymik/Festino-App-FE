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
import OrderPaymentView from '@/views/orders/OrderPaymentView.vue';
import OrderSearch from '@/views/orders/OrderSearch.vue';
import ErrorView from '@/views/ErrorView.vue';

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
        {
          path: '/reserve/:boothId?',
          name: 'reserve',
          component: TablingView,
          props: true,
        },
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
          path: 'booth/detail/:id',
          name: 'booth-detail',
          component: BoothDetailView,
          props: true,
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
      children: [
        {
          path: '/payment',
          name: 'order-payment',
          component: OrderPaymentView,
        },
        { path: '', name: 'order', component: OrderMainView },
        { path: 'search', name: 'order-search', component: OrderSearch },
      ],
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorView,
    },
  ],
});

export default router;
