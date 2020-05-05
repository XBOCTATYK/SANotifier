import { Localisation } from '../utils/Loc/Localisation';

export default {
    install(Vue, { store, options }) {
        const Loc = new Localisation(store, options);

        Vue.prototype.$loc = function(message) {
            return Loc.getMessage(message);
        };

        Vue.filter('getMessage', function (message) {
            if (!message) return '';

            return Loc.getMessage(message);
        })
    }
}
