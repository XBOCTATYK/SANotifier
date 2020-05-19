import firebase from 'firebase';
import { CREATE_TASK_URL, DELETE_TASK_URL, TASK_LIST_URL, TASK_URL, UPDATE_TASK_URL } from '../../constants/url';
import { getTaskListFB } from '../fireBaseMethods/getTaskList';
import { getTaskFB } from '../fireBaseMethods/getTaskFB';
import { updateTaskFB } from '../fireBaseMethods/updateTask';
import { createTaskFB } from '../fireBaseMethods/createTaskFB';
import { deleteTaskFB } from '../fireBaseMethods/deleteTaskFB';


export function getByFireBase() {
    //firebase.initializeApp(options);


    const db = firebase.firestore();

    return function ({ url, payload }) {
        switch (url) {
            case TASK_LIST_URL:
                return getTaskListFB(db);
            case TASK_URL:
                return getTaskFB(db, payload.taskId);
            case UPDATE_TASK_URL:
                return updateTaskFB(db, payload);
            case CREATE_TASK_URL:
                return createTaskFB(db, payload);
            case DELETE_TASK_URL:
                return deleteTaskFB(db, payload.taskId);
            default:
                return null;
        }
    }
}
