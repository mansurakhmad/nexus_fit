import { createApp } from 'vue';
import App from '@/app/App.vue';
import PrimeVue from 'primevue/config';
import { router } from '@/app/router';
import Aura from '@primeuix/themes/aura';
import { createPinia } from 'pinia';
import '@/app/styles/index.css';

const pinia = createPinia();

const app = createApp(App);

app.use(PrimeVue, { theme: { preset: Aura } });
app.use(pinia);
app.use(router);
app.mount('#app');
