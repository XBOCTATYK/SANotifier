import { SimpleFormatter } from './formatters/SimpleFormatter';

export class SimpleModel {
    storedValue;
    date;
    formattedValue;
    constructor(value, FormatterClass = SimpleFormatter) {
        this.formattedValue = new FormatterClass(value);
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
