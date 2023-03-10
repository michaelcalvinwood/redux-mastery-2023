// action.js contains the factory for producing action dispatch objects
import { createSlice } from '@reduxjs/toolkit';

let id = 0;

const sliceTasks = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push({
                id: ++id,
                task: action.payload.task,
                completed: false
            })
        },
        removeTask: (state, action) => {
            const index = state.findIndex(task => task.id === action.payload.id);
            state.splice(index, 1);
        },
        markCompleted: (state, action) => {
            const index = state.findIndex(task => task.id === action.payload.id);
            state[index].completed = true;
        }
    }
});

export const { addTask, removeTask, markCompleted } = sliceTasks.actions;

export default sliceTasks.reducer;


