import { JSONMessageStore } from '../utils/Loc/messageStores/JSONMessageStore';
import { getJSON } from '../utils/dataSources/JSON';
import { getByFireBase } from '../utils/dataSources/fireBase';
import firebaseConfig from './local.json';

export const APP_MODES = {
    MOCK: 'mock',
    DEV: 'dev',
    PROD: 'prod'
};

export const APP_CONFIG = {
    MODE: APP_MODES.DEV,
    DEFAULT_LOCALE: 'ru',
    FULL_DEFAULT_LOCALE: 'ru-RU'
};

export const APP_DEFAULT_IMPLEMENTATIONS = {
    [APP_MODES.MOCK]: {
        messageStore: JSONMessageStore,
        requests: getJSON,
    },
    [APP_MODES.DEV]: {
        messageStore: JSONMessageStore,
        requests: getByFireBase(firebaseConfig),
    },
    [APP_MODES.PROD]: {
        messageStore: JSONMessageStore
    },
};
