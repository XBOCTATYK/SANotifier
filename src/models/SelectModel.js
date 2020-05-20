import { SelectFormatter } from './formatters/SelectFormatter';
import { SimpleModel } from './SimpleModel';

export class SelectModel extends SimpleModel {
    storedValue;
    date;
    formattedValue;
    constructor(value, options) {
        super(value);
        this.oprtions = options;
        this.formattedValue = new SelectFormatter(value || '', 'text-value', this.oprtions);
        this.storedValue = this.formattedValue.value();
    }

    setValue(value) {
        return new SelectModel(value, this.oprtions);
    }
}
