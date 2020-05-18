export function getTaskListFB(db) {
    db.collection('tasks').get()
        .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(`${ doc.id } => ${ doc.data() }`);
                });
            }
        )
}
