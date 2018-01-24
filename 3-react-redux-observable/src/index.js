import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import App from './App';
import appReducer from './appReducer';
import epics from './epics';

import './index.css';

const epicMiddleware = createEpicMiddleware(epics);

const store = createStore(appReducer, applyMiddleware(epicMiddleware, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
