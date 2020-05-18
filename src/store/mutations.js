export const TYPES = {
    SET_TASK_LIST: 'setTaskList',
    SET_FORM_VALUE: 'setFormValue',
    SET_SOME_FORM_VALUES: 'setSomeFormValues',
};

export function setTaskList(state, list) {
    state.taskList = list;
}

export function setFormValue(state, { name, value }) {
    state.form[name] = value;
}

export function setSomeFormValues(state, values) {
    for (let key in values) {
        if (Object.hasOwnProperty.call(values, key)) {
            state.form[key] = values[key];
        }
    }
}
