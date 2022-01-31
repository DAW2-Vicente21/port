import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

import 'primevue/resources/themes/saga-purple/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'


createApp(App).use(store).use(router).use(PrimeVue).use(Dialog).use(Button).use(InputText).mount('#app')
