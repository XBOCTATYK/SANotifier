import taskList from '../../mocks/task-list.json';
import task from '../../mocks/task.json';
import userOptions from '../../mocks/user-options.json';
import { TASK_LIST_URL, TASK_URL, USER_OPTIONS_URL } from '../../constants/url';

export async function getJSON(options) {
    switch (options.url) {
        case TASK_LIST_URL:
            return taskList;
        case TASK_URL:
            return task;
        case USER_OPTIONS_URL:
            return userOptions;
    }
}
