import * as actions from './action';
import { createReducer } from '@reduxjs/toolkit';
let id = 0;


export default createReducer([], {
    "ADD_TASK": (state, action) => {
        state.push({
            id: ++id,
            task: action.payload.task,
            completed: false
        })
    }, 
    "REMOVE_TASK": (state, action) => {
        const index = state.findIndex(task => task.id === action.payload.id);
        state.splice(index, 1);
    },
    "MARK_COMPLETED": (state, action) => {
        const index = state.findIndex(task => task.id === action.payload.id);
        state[index].completed = true;
    }
})

// Legacy immutable method: Still Valid if you want
// export default function reducer (state = [], action) {
//     switch (action.type) {
//         case actions.addTask.type:
//             return [
//                 ...state,
//                 {
//                     id: ++id,
//                     task: action.payload.task,
//                     completed: false
//                 }
//             ] 
//         case actions.removeTask.type:
//             return state.filter(task => task.id !== action.payload.id);
//         case actions.markCompleted.type:
//             return state.map(task => task.id === action.payload.id ? {...task, completed: true} : task);
            
//         default:
//             return state;
//     }
// }