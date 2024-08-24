import './assets/css/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';
import VueGtag from 'vue-gtag-next';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(createHead());
app.use(VueGtag, {
  property: {
    id: 'G-KZHM2SH2NL',
  },
});

app.mount('#app');
