//引入
import {createApp} from "vue";
import {createPinia} from 'pinia';
//创建
const app = createApp();
const pinia = createPinia();
//安装
app.use(pinia)
app.mount('#app');