<template>
    <v-container>
        <h1>{{ 'TASK_LIST' | getMessage }}</h1>
        <br/>
        <list-table :list="taskList"></list-table>
        <br/>
        <v-row justify="center">
            <v-btn @click="$router.push(`/task/create/new`)" outlined>{{ 'TASK_ADD' | getMessage }}</v-btn>
        </v-row>
    </v-container>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    import { EXTERNAL_DATA_TYPES } from '../constants/externalDataFunctions';
    import ListTable from '../components/list-table';

    export default {
        name: "TaskList",
        components: { ListTable },
        computed: ({
            ...mapState([ 'taskList' ])
        }),
        methods: ({
            ...mapActions([
                EXTERNAL_DATA_TYPES.getTaskList
            ])
        }),
        created() {
            this.getTaskList();
        }
    }
</script>

<style scoped>

</style>
