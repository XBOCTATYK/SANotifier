import firebase from 'firebase';
import { sendToken } from './sendToken';

export function setFirebaseMessaging() {
    let messaging;

    return function() {
        // firebase_subscribe.js

        if ('Notification' in window) {
            messaging = firebase.messaging();

            if (Notification.permission === 'granted') {
                subscribe();
            }

            subscribe();
        }

        function subscribe() {
            Notification.requestPermission()
                .then(function () {
                    messaging.getToken()
                        .then(function (currentToken) {
                            console.log(currentToken);

                            if (currentToken) {
                                return sendTokenToServer(currentToken);
                            } else {
                                console.warn('Не удалось получить токен.');
                                return setTokenSentToServer(false);
                            }
                        })
                        .then((result) => {
                            console.log(result)
                        })
                        .catch(function (err) {
                            console.warn('При получении токена произошла ошибка.', err);
                        });
                })
                .catch(function (err) {
                    console.warn('Не удалось получить разрешение на показ уведомлений.', err);
                });
        }

        async function sendTokenToServer(currentToken) {
            if (!isTokenSentToServer(currentToken)) {
                console.log('Отправка токена на сервер...');

                setTokenSentToServer(currentToken);
                await sendToken(currentToken);
                return;
            } else {
                console.log('Токен уже отправлен на сервер.');
            }
        }

        function isTokenSentToServer(currentToken) {
            return window.localStorage.getItem('sentFirebaseMessagingToken') === currentToken;
        }

        function setTokenSentToServer(currentToken) {
            window.localStorage.setItem(
                'sentFirebaseMessagingToken',
                currentToken ? currentToken : ''
            );
        }

        messaging.onMessage((payload) => {
            console.log(payload)
            // регистрируем пустой ServiceWorker каждый раз
            navigator.serviceWorker.register('messaging-sw.js').catch(err => console.error(err));

            // запрашиваем права на показ уведомлений если еще не получили их
            Notification.requestPermission().then(function (result) {
                if (result === 'granted') {
                    navigator.serviceWorker.ready.then(function (registration) {
                        // теперь мы можем показать уведомление
                        return registration.showNotification(payload.notification.title, payload.notification);
                    }).catch(function (error) {
                        console.log('ServiceWorker registration failed', error);
                    });
                }
            });
        });

    }
}
