import { APP_CONFIG, APP_DEFAULT_IMPLEMENTATIONS } from '../../constants/config';

export function withRequestImplementationsByMode(getFunc, mode = APP_CONFIG.mode) {
    return getFunc(APP_DEFAULT_IMPLEMENTATIONS[mode].requests);
}
