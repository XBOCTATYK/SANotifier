import { DateFormatter } from './formatters/DateFormatter';
import startOfDay from 'date-fns/startOfDay';

export class DateModel {
    storedValue;
    date;
    formattedDate;
    constructor(date, FormatterClass = DateFormatter) {
        this.startOfDay = startOfDay;

        this.formattedDate = new FormatterClass(date || new Date(), 'yyyy-MM-dd');
        this.date = this.formattedDate.value();
        this.storedValue = this.startOfDay(this.date);
    }

    toString() {
        return this.formattedDate.setValue(this.storedValue).toString();
    }

    valueOf() {
        return this.storedValue.getTime();
    }

    value() {
        return this.storedValue;
    }

    setValue(value) {
        return new DateModel(value);
    }
}
