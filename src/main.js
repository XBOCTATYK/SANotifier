import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import routes from './pages/routes';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app');
