import store from "./store";

console.log(store.getState());

store.dispatch({
    type: 'ADD_TASK',
    payload: {
        task: "Buy milk"
    }
});

console.log(store.getState());
