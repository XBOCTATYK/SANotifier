import { withRequestImplementationsByMode } from './withRequestImplementationsByMode';

export class DataRequests {
    constructor(mode, functionsItems) {
        this.mode = mode;
        this.functionsItems = functionsItems;

        this.setImplementations();
    }

    setImplementations() {
        this.functionsItems.forEach(item => {
            this[item.name] = withRequestImplementationsByMode(item.func, this.mode)
        })
    }

    setMode(mode) {
        this.mode = mode;

        this.setImplementations();
    }
}
