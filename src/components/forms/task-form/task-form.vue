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
                    :value="date.toString()"
                    :change="(value) => setValue({ target: { name: 'date', value: dateTime.setDate(value).valueOf() }})"
            >
                <v-date-picker
                        name="date"
                        @change="(value) => setValue({ target: { name: 'date', value: dateTime.setDate(value).valueOf() }})"
                        :value="date.toString()"
                >
                    <v-text-field name="date" @change.native="setValue" :value="date"></v-text-field>
                </v-date-picker>
            </modal-selector>
            <modal-selector
                    :label="'FIELD_TIME' | getMessage"
                    :value="time"
                    :change="(value) => setValue({ target: { name: 'date', value: dateTime.setTime(value).valueOf() }})"
            >
                <v-time-picker
                    name="date"
                    @change="(value) => setValue({ target: { name: 'date', value: dateTime.setTime(value).valueOf() }})"
                    :format="'24hr'"
                    :value="time"
                >
                    <v-text-field name="date" @change.native="setValue" :value="time"></v-text-field>
                </v-time-picker>
            </modal-selector>
            <v-select
                    name="priority"
                    @change="(value) => setValue({ target: { name: 'priority', value: priority.setValue(value).value() }})"
                    :label="'FIELD_PRIORITY' | getMessage"
                    :items="selectFieldOptions.priority"
                    :value="priority.toString()"
                    single-line
            ></v-select>
            <v-textarea
                    name="description"
                    @change.native="setValue"
                    :value="form.description"
                    auto-grow
                    :label="'FIELD_DESCRIPTION' | getMessage"
            ></v-textarea>
            <v-select
                    name="type"
                    @change="(value) => setValue({ target: { name: 'type', value: type.setValue(value).value() }})"
                    :label="'FIELD_TYPE' | getMessage"
                    :items="selectFieldOptions.type"
                    :value="type.toString()"
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
    import { DateTimeModel } from '../../../models/DateTimeModel';
    import { SelectModel } from '../../../models/SelectModel';

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
            dateTime() {
                return new DateTimeModel(this.form.date);
            },
            date() {
                return this.dateTime.date();
            },
            time() {
                return this.dateTime.time();
            },
            priority() {
                return new SelectModel(this.form.priority, priorityOptions.map( item => ({ value: item.value, text: this.$loc(item.text) })));
            },
            type() {
                return new SelectModel(this.form.type, taskTypeOptions.map( item => ({ value: item.value, text: this.$loc(item.text) })));
            }
        },
        methods: {
            ...mapMutations([TYPES.SET_FORM_VALUE]),
            setValue(event) {
                const { name, value } = event.target;

                console.log(value);

                this[TYPES.SET_FORM_VALUE]({ name, value })
            },
        },
    }
</script>

<style scoped>

</style>
