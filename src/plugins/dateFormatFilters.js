import format from 'date-fns/format'

export default {
    install(Vue) {

        Vue.filter('formatDate', function (date) {
            if (!date) return '';

            return format(new Date(date), "dd.MM.yyyy")
        });

        Vue.filter('formatDateWithTime', function (date) {
            if (!date) return '';

            return format(new Date(date), "kk:mm - dd.MM.yyyy")
        });

        Vue.filter('formatTime', function (date) {
            if (!date) return '';

            return format(new Date(date), "kk:mm")
        });
    }
}
