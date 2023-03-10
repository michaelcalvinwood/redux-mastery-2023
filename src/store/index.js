/*
 * Redux ToolKit: https://redux-toolkit.js.org/
 * useSelect and useDispatch: https://builtin.com/software-engineering-perspectives/useselector-usedispatch-react-redux
 */

import store from "./store/configureStore";
import { addEmployee } from "./store/employees";
import { addTask, removeTask, markCompleted, initTasks } from './store/tasks';
import axios from "axios";

const getTasks = async () => {
    let response;

    try {   
        response = await axios.get('http://localhost:5001/api/tasks');

    } catch(e) {
        console.error(e);
    }

    console.log(response.data);
    const tasks = response.data;
    store.dispatch(initTasks({tasks}));
}

getTasks();





// const unsubscribe = store.subscribe(() => {
//     console.log('updated state', store.getState());
// })





// store.dispatch(initTasks({tasks }))

// store.dispatch(addTask({task: 'Buy Bread'}));

// store.dispatch(markCompleted({id: 1}));

// store.dispatch(addEmployee({name: "Michael"}))

//store.dispatch(removeTask(1));

//unsubscribe();
