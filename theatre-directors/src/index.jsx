import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import App from './App';
import * as serviceWorker from './serviceWorker';
import commonRu from './assets/textInfo/translations/ru/common.json';
import commonBy from './assets/textInfo/translations/by/common.json';
import commonEn from './assets/textInfo/translations/en/common.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'ru',
  resources: {
    ru: {
      common: commonRu,
    },
    by: {
      common: commonBy,
    },
    en: {
      common: commonEn,
    },
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
