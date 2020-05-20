import { TimeModel } from './TimeModel';
import { DateModel } from './DateModel';
import { DateFormatter } from './formatters/DateFormatter';

const defaultFormattedDate = new DateFormatter(new Date(), 'kk:mm - dd.MM.yyyy');

export class DateTimeModel {
    storedValue;
    dateValue;
    timeValue;
    formattedDate;

    constructor(date, formattedDate = defaultFormattedDate) {
        this.formattedDate = formattedDate.setValue(date);
        this.dateValue = new DateModel(this.formattedDate.value());
        this.timeValue = new TimeModel(this.formattedDate.value());
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
