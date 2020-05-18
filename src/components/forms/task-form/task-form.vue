<template>
    <v-container fluid>
        <v-form @submit="$attrs.submit">
            <v-text-field
                    name="name"
                    @change.native="setValue"
                    :label="'FIELD_NAME' | getMessage"
                    :value="form.name"

            ></v-text-field>
            <modal-selector
                    :label="'FIELD_DATE' | getMessage"
                    :value="form.date | formatDate"
                    :change="(value) => setValue({ target: { name: 'date', value }})"
            >
                <v-date-picker
                        name="date"
                        @change="(value) => setValue({ target: { name: 'date', value }})"
                        :value="form.date"
                >
                    <v-text-field name="date" @change.native="setValue" :value="form.date"></v-text-field>
                </v-date-picker>
            </modal-selector>
            <modal-selector
                    :label="'FIELD_TIME' | getMessage"
                    :value="form.time"
                    :change="(value) => setValue({ target: { name: 'time', value }})"
            >
                <v-time-picker
                    name="time"
                    @change="(value) => setValue({ target: { name: 'time', value }})"
                    :value="form.time"
                >
                    <v-text-field name="time" @change.native="setValue" :value="form.time"></v-text-field>
                </v-time-picker>
            </modal-selector>
            <v-select
                    name="priority"
                    @change="(value) => setValue({ target: { name: 'priority', value }})"
                    :label="'FIELD_PRIORITY' | getMessage"
                    :items="selectFieldOptions.priority"
                    :value="form.priority"
                    single-line
            ></v-select>
            <v-textarea
                    name="description"
                    @change.native="setValue"
                    auto-grow
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
                <v-btn large @click="$attrs.submit" text>
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
    import ModalSelector from '../../fields/modal-selector';

    export default {
        name: "task-form",
        components: { ModalSelector },
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
