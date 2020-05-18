export function getAbstractFunction(name) {
    return function(implementation) {
        return async function(options) {
            try {
                return await implementation(options);
            } catch (e) {
                console.error(`Error during perform ${name}`);
                console.error(e);
            }
        }
    };
}
