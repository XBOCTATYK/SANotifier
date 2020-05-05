export const TYPES = {
    SET_TASK_LIST: 'setTaskList'
};

export function setTaskList(state, list) {
    state.taskList = list;
}
