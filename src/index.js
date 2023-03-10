// Reduc ToolKit: https://redux-toolkit.js.org/


import store from "./store/configureStore";
import { addEmployee } from "./store/employees";
import { addTask, removeTask, markCompleted } from './store/tasks';

const unsubscribe = store.subscribe(() => {
    console.log('updated state', store.getState());
})

store.dispatch(addTask({task: 'Buy Bread'}));

store.dispatch(markCompleted({id: 1}));

store.dispatch(addEmployee({name: "Michael"}))

//store.dispatch(removeTask(1));

unsubscribe();