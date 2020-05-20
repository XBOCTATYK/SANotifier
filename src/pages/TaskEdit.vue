<template>
    <loadable-content :loading="taskLoaded">
        <task-form :submit="this.update"></task-form>
    </loadable-content>
</template>

<script>
    import { mapActions, mapMutations, mapState } from 'vuex';
    import { EXTERNAL_DATA_TYPES } from '../constants/externalDataFunctions';
    import TaskForm from '../components/forms/task-form/task-form';
    import { TYPES } from '../store/mutations';
    import LoadableContent from '../components/loadable-content';

    export default {
        name: "TaskEdit",
        components: { LoadableContent, TaskForm },
        created() {
            this[EXTERNAL_DATA_TYPES.getTask](this.$route.params.id);
            this[TYPES.SET_LAST_SELECTED_TASK](this.$route.params.id);
        },
        computed: {
            ...mapState({
                taskLoaded: state => state.UI.task.loading
            })
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
