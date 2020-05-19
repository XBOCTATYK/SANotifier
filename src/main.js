import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import routes from './pages/routes';
import vuetify from './plugins/vuetify';
import { APP_CONFIG, APP_DEFAULT_IMPLEMENTATIONS } from './constants/config';
import { DataRequests } from './utils/DataRequests/DataRequests';
import getVuexStore from './store';
import { EXTERNAL_DATA_TYPES } from './constants/externalDataFunctions';
import LocalizationPlugin from './plugins/localization';
import DateFormatFiltersPlugin from './plugins/dateFormatFilters';
import { getAbstractFunction } from './utils/getDataFunctions/getAbstractFunction';

export const ExternalDataStore = new DataRequests(APP_CONFIG.MODE, [
  { name: EXTERNAL_DATA_TYPES.getTaskList, func: getAbstractFunction(EXTERNAL_DATA_TYPES.getTaskList) },
  { name: EXTERNAL_DATA_TYPES.getTask, func: getAbstractFunction(EXTERNAL_DATA_TYPES.getTask) },
  { name: EXTERNAL_DATA_TYPES.getUserOptions, func: getAbstractFunction(EXTERNAL_DATA_TYPES.getUserOptions) },
  { name: EXTERNAL_DATA_TYPES.updateTask, func: getAbstractFunction(EXTERNAL_DATA_TYPES.updateTask) },
  { name: EXTERNAL_DATA_TYPES.createTask, func: getAbstractFunction(EXTERNAL_DATA_TYPES.createTask) },
  { name: EXTERNAL_DATA_TYPES.deleteTask, func: getAbstractFunction(EXTERNAL_DATA_TYPES.deleteTask) },
]);

Vue.use(Vuex);

export const store = getVuexStore(ExternalDataStore);

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(LocalizationPlugin, {
  store:  APP_DEFAULT_IMPLEMENTATIONS[APP_CONFIG.MODE].messageStore,
  options: { locale: APP_CONFIG.DEFAULT_LOCALE }
});
Vue.use(DateFormatFiltersPlugin);

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store,
}).$mount('#app');

APP_DEFAULT_IMPLEMENTATIONS[APP_CONFIG.MODE].messages();

navigator.serviceWorker.register('firebase-messaging-sw.js').then(() => console.log('success')).catch(err => console.error(err));
