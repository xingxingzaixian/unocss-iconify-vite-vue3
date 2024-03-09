import { createApp } from 'vue';
// main.ts
import 'virtual:uno.css';
import './style.css';
import 'virtual:svg-icons-register';
import App from './App.vue';

const app = createApp(App);
app.mount('#app');
// createApp(App).mount('#app');
