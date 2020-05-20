import format from 'date-fns/format';
import parse from 'date-fns/parse';
import { SimpleFormatter } from './SimpleFormatter';

export class DateFormatter extends SimpleFormatter {
    constructor(value, formatting, {
        formatFunc = format,
        parseFunc = parse
    } = {}) {
        super(value, formatting, {
            parseFunc,
            formatFunc
        });
    }

    constructValue(value) {
        if (typeof value !== 'string') {
            this.storedValue = new Date(value || Date.now());
            this.storedValueString = this.performFormat(value, this.format);
        } else {
            this.storedValue = this.parseFormat(value, this.format, new Date());
            this.storedValueString = value || '';
        }
    }

    valueOf() {
        return this.storedValue.getTime();
    }

    setValue(value) {
        return new DateFormatter(value, this.format, {
            formatFunc: this.performFormat,
            parseFunc: this.parseFormat,
        })
    }
}
