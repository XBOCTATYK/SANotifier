import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import routes from './pages/routes';
import vuetify from './plugins/vuetify';
import { Localisation } from './utils/Loc/Localisation';
import { APP_CONFIG, APP_DEFAULT_IMPLEMENTATIONS } from './constants/config';
import { DataRequests } from './utils/DataRequests/DataRequests';
import { getTaskList } from './utils/getDataFunctions/getTaskList';
import { getTask } from './utils/getDataFunctions/getTask';
import { getUserOptions } from './utils/getDataFunctions/getUserOptions';
import getVuexStore from './store';
import { EXTERNAL_DATA_TYPES } from './constants/externalDataFunctions';

export const Loc = new Localisation(
    APP_DEFAULT_IMPLEMENTATIONS[APP_CONFIG.MODE].messageStore,
    { locale: APP_CONFIG.DEFAULT_LOCALE }
);

export const ExternalDataStore = new DataRequests(APP_CONFIG.MODE, [
  { name: EXTERNAL_DATA_TYPES.getTaskList, func: getTaskList },
  { name: EXTERNAL_DATA_TYPES.getTask, func: getTask },
  { name: EXTERNAL_DATA_TYPES.getUserOptions, func: getUserOptions }
]);

Vue.use(Vuex);

export const store = getVuexStore(ExternalDataStore);

Vue.config.productionTip = false;

Vue.use(VueRouter);


const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store,
}).$mount('#app');
