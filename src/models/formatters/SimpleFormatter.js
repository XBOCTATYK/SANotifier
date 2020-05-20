export class SimpleFormatter {
    constructor(value, formatting = null, {
        formatFunc = value => value,
        parseFunc = value => value
    } = {}) {
        this.performFormat = formatFunc;
        this.parseFormat = parseFunc;
        this.format = formatting;
        this.constructValue(value);
    }

    constructValue(value) {
        if (typeof value !== 'string') {
            this.storedValue = value;
            this.storedValueString = this.performFormat(value, this.format);
        } else {
            this.storedValue = this.parseFormat(value, this.format);
            this.storedValueString = value || '';
        }
    }

    toString() {
        return this.storedValueString;
    }

    valueOf() {
        return NaN;
    }

    value() {
        return this.storedValue;
    }

    setValue(value) {
        return new SimpleFormatter(value, this.format, {
            formatFunc: this.performFormat,
            parseFunc: this.parseFormat,
        })
    }
}
