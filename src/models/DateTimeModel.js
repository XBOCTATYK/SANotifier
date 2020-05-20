import { TimeModel } from './TimeModel';
import { DateModel } from './DateModel';
import { DateFormatter } from './formatters/DateFormatter';

export class DateTimeModel {
    storedValue;
    dateValue;
    timeValue;
    formattedDate;

    constructor(date, FormatterClass = DateFormatter) {
        this.formattedDate = new FormatterClass(date || new Date(), 'kk:mm - dd.MM.yyyy');
        this.dateValue = new DateModel(this.formattedDate.value(), FormatterClass);
        this.timeValue = new TimeModel(this.formattedDate.value(), FormatterClass);
        this.storedValue = new Date(this.dateValue + this.timeValue);
    }

    toString() {
        return this.formattedDate.setValue(this.storedValue).toString();
    }

    valueOf() {
        return this.storedValue.getTime();
    }

    setTime(value) {
        const newDateValue = this.dateValue + this.timeValue.setValue(value);
        return new DateTimeModel(newDateValue);
    }

    setDate(value) {
        const newDateValue = this.timeValue + this.dateValue.setValue(value);
        return new DateTimeModel(newDateValue);

    }

    time() {
        return this.timeValue;
    }

    date() {
        return this.dateValue;
    }

    value() {
        return this.storedValue;
    }
}
