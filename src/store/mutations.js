export const TYPES = {
    SET_TASK_LIST: 'setTaskList',
    SET_FORM_VALUE: 'setFormValue'
};

export function setTaskList(state, list) {
    state.taskList = list;
}

export function setFormValue(state, { name, value }) {
    state.form[name] = value;
}
