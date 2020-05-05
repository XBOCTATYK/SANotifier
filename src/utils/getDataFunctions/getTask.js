export const getTask = function(implementation) {
    return async function(options) {
        try {
            return await implementation(options);
        } catch (e) {
            console.error('Error during request task list')
        }
    }
};
