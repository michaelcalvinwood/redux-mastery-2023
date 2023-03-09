import * as actions from './action';
let id = 0;

export default function reducer (state = [], action) {
    switch (action.type) {
        case actions.addTask.type:
            return [
                ...state,
                {
                    id: ++id,
                    task: action.payload.task,
                    completed: false
                }
            ] 
        case actions.removeTask.type:
            return state.filter(task => task.id !== action.payload.id);
        case actions.markCompleted.type:
            return state.map(task => task.id === action.payload.id ? {...task, completed: true} : task);
            
        default:
            return state;
    }
}