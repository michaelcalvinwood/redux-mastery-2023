import store from "./store";
import { addTask, removeTask } from './action';

console.log(store.getState());

store.dispatch(addTask('Buy Eggs'));

console.log(store.getState());

store.dispatch(removeTask(1));

console.log(store.getState());
