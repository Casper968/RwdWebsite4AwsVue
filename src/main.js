import { createApp } from 'vue'
import App from './App.vue'
import './assets/reset.css';
import mitt from "mitt";
const app = createApp(App);
const eventBus = mitt();
app.config.globalProperties.eventBus = eventBus;
app.provide('global_config', { 'dark_mode': false } );
app.mount('#app');
