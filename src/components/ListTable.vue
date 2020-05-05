<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left">{{ 'TASK' | getMessage }}</th>
                <th class="text-center">{{ 'TASK_PRIORITY' | getMessage }}</th>
                <th class="text-left">{{ 'TASK_STATUS' | getMessage }}</th>
                <th  class="text-center">{{ 'TIME_TO_DONE' | getMessage }}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in $attrs.list" :key="item.name">
                <td>{{ item.name }}</td>
                <td class="text-center">{{ item.priority }}</td>
                <td>{{  }}</td>
                <td class="text-center">{{ item.time | formatDateWithTime }}</td>
            </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
    export default {
        name: "ListTable",
        data() {
            return {
                headers: [
                    {}
                ],
            }
        }
    }
</script>

<style scoped>

</style>
