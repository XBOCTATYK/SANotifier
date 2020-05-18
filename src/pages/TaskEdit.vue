<template>
    <task-form></task-form>
</template>

<script>
    import { mapActions } from 'vuex';
    import { EXTERNAL_DATA_TYPES } from '../constants/externalDataFunctions';
    import TaskForm from '../components/forms/task-form/task-form';

    export default {
        name: "TaskEdit",
        components: { TaskForm },
        created() {
            this[EXTERNAL_DATA_TYPES.getTask]();
        },
        methods: ({
            ...mapActions([
                EXTERNAL_DATA_TYPES.getTask
            ])
        }),
    }
</script>

<style scoped>

</style>
