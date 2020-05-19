<template>
    <v-container>
        <h1>{{ 'TASK_LIST' | getMessage }}</h1>
        <br/>
        <loadable-content :loading="tasksLoaded">
            <list-table
                    :list="taskList"
                    :selectItem="(id) => $router.push(`/task/${id}`)"
                    :deleteItem="(id) => this.deleteTask(id)">
            </list-table>
        </loadable-content>
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
    import LoadableContent from '../components/loadable-content';

    export default {
        name: "TaskList",
        components: { LoadableContent, ListTable },
        computed: ({
            ...mapState([ 'taskList' ]),
            ...mapState({
                tasksLoaded: state => state.UI.taskList.loading
            })
        }),
        methods: ({
            ...mapActions([
                EXTERNAL_DATA_TYPES.getTaskList,
                EXTERNAL_DATA_TYPES.deleteTask,
            ])
        }),
        created() {
            this.getTaskList();
        }
    }
</script>

<style scoped>

</style>
