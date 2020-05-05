export class Localisation {
    constructor(Implementation, { locale }) {
        this.Implementation = Implementation;
        this.messageStore = new Implementation(locale);
    }

    setImplementation(implementation) {
        this.Implementation = implementation;
    }

    setLocale(locale) {
        this.messageStore = new this.Implementation(locale);
    }

    getMessage(message) {
        return this.messageStore.getMessage(message);
    }

    getLocale() {
        return this.messageStore.locale;
    }

    getMessageStore() {
        return this.Implementation;
    }
}
