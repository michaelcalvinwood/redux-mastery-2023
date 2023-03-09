// Reduc ToolKit: https://redux-toolkit.js.org/


import store from "./store/store";
import { addTask, removeTask, markCompleted } from './store/action';

const unsubscribe = store.subscribe(() => {
    console.log('updated state', store.getState());
})

store.dispatch(addTask('Buy Bread'));

store.dispatch(markCompleted(1));

//store.dispatch(removeTask(1));

unsubscribe();