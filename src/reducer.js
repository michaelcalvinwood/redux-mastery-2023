import * as actionType from './actionTypes';
let id = 0;

export default function reducer (state = [], action) {
    switch (action.type) {
        case actionType.ADD_TASK:
            return [
                ...state,
                {
                    id: ++id,
                    task: action.payload.task,
                    completed: false
                }
            ] 
        case actionType.REMOVE_TASK:
            return state.filter(task => task.id !== action.payload.id);
        default:
            return state;
    }
}