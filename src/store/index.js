import Vuex from 'vuex';
import { getActions } from './actions';
import { setFormValue, setSomeFormValues, setTaskList, TYPES } from './mutations';

export default function (ExternalDataStore) {
    const actionsWithDataStore = getActions(ExternalDataStore);

    return new Vuex.Store({
        state: {
            userId: 1,
            userOptions: {
                language: null,
            },
            form: {
                priority: '',
                name: '',
                description: '',
                date: '',
                time: '',
                type: ''
            },
            taskList: [],
        },
        mutations: {
            [TYPES.SET_TASK_LIST]: setTaskList,
            [TYPES.SET_FORM_VALUE]: setFormValue,
            [TYPES.SET_SOME_FORM_VALUES]: setSomeFormValues,
        },
        actions: { ...actionsWithDataStore }
    })
}
