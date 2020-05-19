export const TYPES = {
    SET_TASK_LIST: 'setTaskList',
    SET_FORM_VALUE: 'setFormValue',
    SET_SOME_FORM_VALUES: 'setSomeFormValues',
    REMOVE_TASK_FROM_LIST: 'removeTaskFromList',
    SET_LAST_SELECTED_TASK: 'setLastSelectedTask',
    SET_ELEMENT_LOAD_STATE: 'setElementLoadState'
};

export function getTaskMutations() {
    return {
        setTaskList(state, list) {
            state.taskList = list;
        },
        setFormValue(state, { name, value }) {
            state.form[name] = value;
        },
        removeTaskFromList(state, taskId) {
            const list = state.taskList;

            state.taskList = list.filter(task => task.id !== taskId);
        },
        setSomeFormValues(state, values) {
            for (let key in values) {
                if (Object.hasOwnProperty.call(values, key)) {
                    state.form[key] = values[key];
                }
            }
        },
        setLastSelectedTask(state, taskId) {
            state.lastSelectedTask = taskId;
        },
        setElementLoadState(state, { element, value }) {
            state.UI[element].loading = value;
        }
    }
}
