import { createApp } from 'vue';

import Aura from '@primeuix/themes/aura';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';

import App from '@/app/App.vue';
import { router } from '@/app/router';
import '@/app/styles/index.css';

const pinia = createPinia();

const app = createApp(App);

app.use(PrimeVue, { theme: { preset: Aura } });
app.use(VueQueryPlugin);
app.use(pinia);
app.use(router);
app.mount('#app');
