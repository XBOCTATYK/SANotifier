export function deleteTaskFB(db, taskId) {
    return db.collection('tasks').doc(taskId).delete();
}
