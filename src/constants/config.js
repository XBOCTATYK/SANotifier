import { JSONMessageStore } from '../utils/Loc/messageStores/JSONMessageStore';
import { getJSON } from '../utils/dataSources/JSON';

export const APP_MODES = {
    MOCK: 'mock',
    DEV: 'dev',
    PROD: 'prod'
};

export const APP_CONFIG = {
    MODE: APP_MODES.MOCK,
    DEFAULT_LOCALE: 'ru',
};

export const APP_DEFAULT_IMPLEMENTATIONS = {
    [APP_MODES.MOCK]: {
        messageStore: JSONMessageStore,
        requests: getJSON,
    },
    [APP_MODES.DEV]: {
        messageStore: JSONMessageStore
    },
    [APP_MODES.PROD]: {
        messageStore: JSONMessageStore
    },
};
