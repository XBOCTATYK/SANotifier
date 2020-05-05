import Vuex from 'vuex';
import { getActions } from './actions';
import { setTaskList, TYPES } from './mutations';

export default function (ExternalDataStore) {
    const actionsWithDataStore = getActions(ExternalDataStore);

    return new Vuex.Store({
        state: {
            userId: 1,
            userOptions: {
                language: null,
            }
        },
        taskList: [],
        mutations: {
            [TYPES.SET_TASK_LIST]: setTaskList
        },
        actions: { ...actionsWithDataStore }
    })
}
