import ruMessages from '../../../mocks/messages.json';

export class JSONMessageStore {
    constructor(defaultLocale) {
        this.messages = { ...ruMessages };
        this.locale =  defaultLocale || 'ru';
    }

    addMessages(newMessages) {
        this.messages = { ...this.messages, ...newMessages }
    }

    getMessage(message) {
        let localizedMessage = this.messages[this.locale][message];

        if (!localizedMessage) {
            localizedMessage = message;
        }

        return localizedMessage;
    }
}
