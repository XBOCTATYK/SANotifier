export function getTaskFB(db, taskId) {
    return db.collection('tasks').doc(taskId).get().then(doc => {
        if (!doc.exists) {
            console.log('No such document!');
        } else {
            console.log('Document data:', doc.data());
            return Promise.resolve(doc.data());
        }
    })
        .catch(err => {
            console.log('Error getting document', err);
        });
}
