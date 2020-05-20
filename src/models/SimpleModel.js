import { SimpleFormatter } from './formatters/SimpleFormatter';

const defaultFormattedValue = new SimpleFormatter(null);

export class SimpleModel {
    storedValue;
    formattedValue;
    constructor(value, formattedValue = defaultFormattedValue) {
        this.formattedValue = formattedValue.setValue(value);
        this.storedValue = this.formattedValue.value();
    }

    toString() {
        return this.formattedValue.setValue(this.storedValue).toString();
    }

    valueOf() {
        return NaN;
    }

    value() {
        return this.storedValue;
    }

    setValue(value) {
        return new SimpleModel(value);
    }
}
