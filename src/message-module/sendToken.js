import firebase from 'firebase';
import firebaseConfig from '../constants/local.json';

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export async function sendToken(token) {
    if (!token) return ;
    return db.collection('tokens').add({ token })
}
