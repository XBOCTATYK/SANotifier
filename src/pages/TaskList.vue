<template>
    <ListTable :list="taskList"></ListTable>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    import { EXTERNAL_DATA_TYPES } from '../constants/externalDataFunctions';
    import ListTable from '../components/ListTable';

    export default {
        name: "TaskList",
        components: { ListTable },
        computed: ({
            ...mapState([ 'taskList', 'userId' ])
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
