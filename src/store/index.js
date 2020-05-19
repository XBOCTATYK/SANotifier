import Vuex from 'vuex';
import { getActions } from './actions';
import { getTaskMutations} from './mutations';

export default function (ExternalDataStore) {
    const taskMutations = getTaskMutations();
    const actionsWithDataStore = getActions(ExternalDataStore);

    return new Vuex.Store({
        state: {
            userId: 1,
            lastSelectedTask: null,
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
            taskList: null,
            UI: {
                taskList: {
                    loading: true,
                },
                task: {
                    loading: true,
                },
                taskCreate: {
                    loading: true,
                },
                taskDelete: {
                    loading: true
                }
            },
        },
        mutations: { ...taskMutations },
        actions: { ...actionsWithDataStore }
    })
}
