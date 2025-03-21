import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Toast, { POSITION } from 'vue-toastification';
import "vue-toastification/dist/index.css";

const app = createApp(App)

const options = {
    position: POSITION.TOP_CENTER,
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false
};

app.use(Toast, options);
app.mount('#app')
