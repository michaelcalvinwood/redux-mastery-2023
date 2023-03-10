import { configureStore } from '@reduxjs/toolkit';

import taskReducer from './tasks';
import employeesReducer from './employees';

const store = configureStore({ reducer: {
    tasks: taskReducer,
    employees: employeesReducer
} }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;