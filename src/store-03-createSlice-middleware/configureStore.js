import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import taskReducer from './tasks';
import employeesReducer from './employees';
import log from './middleware/log';
import logger from 'redux-logger';

const store = configureStore({ 
    reducer: {
        tasks: taskReducer,
        employees: employeesReducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger]
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;