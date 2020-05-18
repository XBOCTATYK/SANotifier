<template>
    <task-form :submit="this.update"></task-form>
</template>

<script>
    import { mapActions } from 'vuex';
    import { EXTERNAL_DATA_TYPES } from '../constants/externalDataFunctions';
    import TaskForm from '../components/forms/task-form/task-form';

    export default {
        name: "TaskEdit",
        components: { TaskForm },
        created() {
            this[EXTERNAL_DATA_TYPES.getTask](this.$route.params.id);
        },
        methods: ({
            ...mapActions([
                EXTERNAL_DATA_TYPES.getTask,
                EXTERNAL_DATA_TYPES.updateTask
            ]),
            update() {
                this[EXTERNAL_DATA_TYPES.updateTask](this.$route.params.id)
            }
        }),
    }
</script>

<style scoped>

</style>
