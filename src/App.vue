<template>
    <v-app>
        <v-content>
            <v-app-bar>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </v-app-bar>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: 'App',

        components: {},

        data: () => ({
            //
        }),

        created() {
            this.$vuetify.theme.dark = true
        }
    };
</script>
