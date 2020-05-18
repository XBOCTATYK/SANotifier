export function createTaskFB(db, { values }) {
    return db.collection('tasks').add(values);
}
