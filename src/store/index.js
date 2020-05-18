import Vuex from 'vuex';
import { getActions } from './actions';
import { getTaskMutations} from './mutations';

export default function (ExternalDataStore) {
    const taskMutations = getTaskMutations();
    const actionsWithDataStore = getActions(ExternalDataStore);

    return new Vuex.Store({
        state: {
            userId: 1,
            selectedTask: null,
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
        mutations: { ...taskMutations },
        actions: { ...actionsWithDataStore }
    })
}
