import { createSlice } from "@reduxjs/toolkit";

let id = 0;

const sliceEmployees = createSlice({
    name: 'employees',
    initialState: [],
    reducers: {
        addEmployee: (state, action) => {
            state.push({
                id: ++id,
                name: action.payload.name
            })
        }
    }
});

export const { addEmployee }  = sliceEmployees.actions;

export default sliceEmployees.reducer;