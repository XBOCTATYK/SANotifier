import { TYPES } from './mutations';
import { EXTERNAL_DATA_TYPES } from '../constants/externalDataFunctions';
import { CREATE_TASK_URL, DELETE_TASK_URL, TASK_LIST_URL, TASK_URL, UPDATE_TASK_URL } from '../constants/url';

export function getActions(DataStore) {

    return {
        [EXTERNAL_DATA_TYPES.getTaskList]: async function({ commit }) {
            commit(TYPES.SET_ELEMENT_LOAD_STATE, { element: 'taskList', value: true });
            const taskList = await DataStore.getTaskList({ url: TASK_LIST_URL });

            commit(TYPES.SET_ELEMENT_LOAD_STATE, { element: 'taskList', value: false });
            commit(TYPES.SET_TASK_LIST, taskList);
        },

        [EXTERNAL_DATA_TYPES.getTask]: async function ({ commit }, taskId) {
            commit(TYPES.SET_ELEMENT_LOAD_STATE, { element: 'task', value: true });
            const task = await DataStore.getTask({ url: TASK_URL, payload: { taskId } });

            commit(TYPES.SET_ELEMENT_LOAD_STATE, { element: 'task', value: false });
            commit(TYPES.SET_SOME_FORM_VALUES, task);
        },

        [EXTERNAL_DATA_TYPES.updateTask]: async function ({ state }, taskId) {
            await DataStore.updateTask({
                url: UPDATE_TASK_URL,
                payload: {
                    taskId,
                    values: state.form,
                }
            })
        },
        [EXTERNAL_DATA_TYPES.createTask]: async function({ state }) {
            await DataStore.createTask({
                url: CREATE_TASK_URL,
                payload: {
                    values: state.form
                }
            })
        },
        [EXTERNAL_DATA_TYPES.deleteTask]: async function({ commit }, taskId) {
            try {
                await DataStore.deleteTask({
                    url: DELETE_TASK_URL,
                    payload: {
                        taskId
                    }
                });

                commit(TYPES.REMOVE_TASK_FROM_LIST, taskId)
            } catch (e) {
                console.error(e);
            }
        }
    }
}
