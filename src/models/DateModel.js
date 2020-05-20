import { DateFormatter } from './formatters/DateFormatter';
import startOfDay from 'date-fns/startOfDay';

const defaultFormattedDate = new DateFormatter(new Date(), 'yyyy-MM-dd');

export class DateModel {
    storedValue;
    date;
    formattedDate;
    constructor(date, formattedDate = defaultFormattedDate) {
        this.startOfDay = startOfDay;

        this.formattedDate = formattedDate.setValue(date);
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
