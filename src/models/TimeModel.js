import { DateFormatter } from './formatters/DateFormatter';
import startOfDay from 'date-fns/startOfDay';

const THREE_HOURS = 1000 * 60 * 60 * 3;
const defaultFormattedDate = new DateFormatter(new Date(), 'kk:mm');

export class TimeModel {
    storedValue;
    date;
    formattedDate;
    constructor(date, formattedDate = defaultFormattedDate) {
        this.startOfDay = startOfDay;

        this.formattedDate = formattedDate.setValue(date);
        this.date = this.formattedDate.value();
        this.storedValue = new Date(this.date.getTime() - this.startOfDay(this.date).getTime());
    }

    toString() {
        return this.formattedDate.setValue(
            //TODO: Разобраться с локалями. Пока что отнимаем 3 часа
            new Date(this.storedValue.getTime() - THREE_HOURS)
        ).toString();
    }

    valueOf() {
        return this.storedValue.getTime();
    }

    value() {
        return this.storedValue;
    }

    setValue(value) {
        return new TimeModel(value);
    }
}
