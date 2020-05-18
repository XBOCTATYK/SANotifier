export function updateTaskFB(db, { taskId, values }) {
    return db.collection('tasks')
        .doc(taskId)
        .set(values)
}
