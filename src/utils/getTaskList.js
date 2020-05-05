export const getTaskList = async function(implementation) {
    return function(options) {
        try {
            return implementation(options);
        } catch (e) {
            console.error('Error during request task list')
        }
    }
};
