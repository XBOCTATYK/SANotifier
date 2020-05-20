import { SimpleFormatter } from './SimpleFormatter';

export class SelectFormatter extends SimpleFormatter {
    constructor(value, format, options) {
        super(value, format = 'text-value', {
            formatFunc: (value, [key1]) => {
                const element = options.find(option => option.value === value);

                if (!element) {
                    return '';
                }

                return element[key1] || '';
            },
            parseFunc: (string) => {
                const element = options.find(option => option.text === string);

                if(!element) {
                    return 0;
                }

                return element['value'] || 0;
            },
        });

        this.format = format;
        this.options = options;
    }

    setValue(value) {
        return new SelectFormatter(value, this.format, this.options);
    }
}
