<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { Localisation } from './utils/Loc/Localisation';
import { JSONMessenger } from './utils/Loc/implementations/JSONMessenger';

export const Loc = new Localisation(JSONMessenger, { locale: 'ru' });

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),

  created () {
    this.$vuetify.theme.dark = true
  },
};
</script>
