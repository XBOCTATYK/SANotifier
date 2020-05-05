<template>
    <v-container fluid>
        <v-form>
            <v-text-field
                    name="name"
                    @change.native="setValue"
                    :label="'FIELD_NAME' | getMessage"
                    :value="form.name"

            ></v-text-field>
            <v-date-picker
                name="date"
                @change="(value) => setValue({ target: { name: 'date', value }})"
                :value="form.date"
            ></v-date-picker>
            <v-time-picker
                name="time"
                @change="(value) => setValue({ target: { name: 'time', value }})"
                :value="form.time"
            ></v-time-picker>
            <v-select
                    name="priority"
                    @change="(value) => setValue({ target: { name: 'priority', value }})"
                    :label="'FIELD_PRIORITY' | getMessage"
                    :items="selectFieldOptions.priority"
                    :value="form.priority"
            ></v-select>
            <v-textarea
                    name="description"
                    @change.native="setValue"
                    :label="'FIELD_DESCRIPTION' | getMessage"
            ></v-textarea>
            <v-select
                    name="type"
                    @change="(value) => setValue({ target: { name: 'type', value }})"
                    :label="'FIELD_TYPE' | getMessage"
                    :items="selectFieldOptions.type"
                    :value="form.type"
            ></v-select>
            <v-row justify="center">
                <v-btn large @click="saveForm" text>
                    {{ 'SAVE' | getMessage }}
                </v-btn>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
    import { mapMutations, mapState } from 'vuex';

    import { priorityOptions, taskTypeOptions } from '../../../constants/select-options';
    import { TYPES } from '../../../store/mutations';

    export default {
        name: "task-form",
        data: function () {
            return {
                selectFieldOptions: {
                    priority: priorityOptions.map( item => this.$loc(item.text)),
                    type: taskTypeOptions.map( item => this.$loc(item.text))
                }
            }
        },
        computed: {
            ...mapState(['form']),
        },
        methods: {
            ...mapMutations([TYPES.SET_FORM_VALUE]),
            setValue(event) {
                const { name, value } = event.target;

                this[TYPES.SET_FORM_VALUE]({ name, value })
            },
            saveForm() {

            }
        },
    }
</script>

<style scoped>

</style>
