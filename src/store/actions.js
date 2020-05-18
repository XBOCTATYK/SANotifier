import { TYPES } from './mutations';
import { EXTERNAL_DATA_TYPES } from '../constants/externalDataFunctions';

export function getActions(DataStore) {

    return {
        [EXTERNAL_DATA_TYPES.getTaskList]: async function({ commit }) {
            const taskList = await DataStore.getTaskList({ url: 'taskList' });

            commit(TYPES.SET_TASK_LIST, taskList)
        },

        [EXTERNAL_DATA_TYPES.getTask]: async function ({ commit }) {
            const task = await DataStore.getTask({ url: 'task' });

            commit(TYPES.SET_SOME_FORM_VALUES, task);
        }
    }
}
