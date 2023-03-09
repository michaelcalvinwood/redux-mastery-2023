import store from "./store";

console.log(store.getState());

store.dispatch({
    type: 'ADD_TASK',
    payload: {
        task: "Buy milk"
    }
});

console.log(store.getState());

store.dispatch({
    type: 'REMOVE_TASK',
    payload: {
        id: 1
    }
});

console.log(store.getState());
