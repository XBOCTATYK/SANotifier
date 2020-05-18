export function getTaskListFB(db) {
    return db.collection('tasks').get().then((querySnapshot) => {
        const result = [];

        querySnapshot.forEach((doc) => {
            result.push({ id: doc.id, ...doc.data()});
        });

        return Promise.resolve(result);
    });
}
