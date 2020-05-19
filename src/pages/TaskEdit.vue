<template>
    <task-form :submit="this.update"></task-form>
</template>

<script>
    import { mapActions, mapMutations } from 'vuex';
    import { EXTERNAL_DATA_TYPES } from '../constants/externalDataFunctions';
    import TaskForm from '../components/forms/task-form/task-form';
    import { TYPES } from '../store/mutations';

    export default {
        name: "TaskEdit",
        components: { TaskForm },
        created() {
            this[EXTERNAL_DATA_TYPES.getTask](this.$route.params.id);
            this[TYPES.SET_LAST_SELECTED_TASK](this.$route.params.id);
        },
        methods: ({
            ...mapActions([
                EXTERNAL_DATA_TYPES.getTask,
                EXTERNAL_DATA_TYPES.updateTask,
            ]),
            ...mapMutations([
                TYPES.SET_LAST_SELECTED_TASK
            ]),
            update() {
                this[EXTERNAL_DATA_TYPES.updateTask](this.$route.params.id);
            }
        }),
    }
</script>

<style scoped>

</style>
