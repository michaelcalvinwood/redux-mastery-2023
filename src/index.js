import store from "./store";
import { addTask, removeTask } from './action';

const unsubscribe = store.subscribe(() => {
    console.log('updated state', store.getState());
})

store.dispatch(addTask('Buy Bread'));

store.dispatch(removeTask(1));

unsubscribe();