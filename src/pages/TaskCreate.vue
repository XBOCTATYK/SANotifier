<template>
    <task-form :submit="this.createNewTask"></task-form>
</template>

<script>
    import { mapActions } from 'vuex';
    import TaskForm from '../components/forms/task-form/task-form';
    import { EXTERNAL_DATA_TYPES } from '../constants/externalDataFunctions';

    export default {
        name: "TaskCreate",
        components: { TaskForm },
        methods: {
            ...mapActions([
                EXTERNAL_DATA_TYPES.createTask,
            ]),
            createNewTask() {
                this[EXTERNAL_DATA_TYPES.createTask]();
            }
        }
    }
</script>

<style scoped>

</style>
