import firebase from 'firebase';
import { TASK_LIST_URL } from '../../constants/url';
import { getTaskListFB } from '../fireBaseMethods/getTaskList';


export function getByFireBase({ apiKey, projectId, authDomain }) {
    firebase.initializeApp({
        apiKey,
        authDomain,
        projectId
    });


    const db = firebase.firestore();

    return function ({ url }) {
        switch (url) {
            case TASK_LIST_URL:
                return getTaskListFB(db);
            default:
                return null;
        }
    }
}
