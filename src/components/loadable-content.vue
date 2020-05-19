<template>
    <v-container>
        <v-layout class="loader" v-if="$attrs.loading === true">
            <v-progress-circular
                    :value="40"
                    :indeterminate="true"
            ></v-progress-circular>
        </v-layout>
        <v-layout v-else>
            <slot></slot>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "loadable-content"
    }
</script>

<style scoped>
    .loader {
        display: block;
        text-align: center;
    }
</style>
