import { configureStore } from '@reduxjs/toolkit';

import taskReducer from './tasks';
import employeesReducer from './employees';
import log from '../middleware/log';

const store = configureStore({ 
    reducer: {
        tasks: taskReducer,
        employees: employeesReducer
    },
    middleware: [log] 
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;