// action.js contains the factory for producing action dispatch objects

import * as actionType from './actionTypes';

export const addTask = task => {
    return {
        type: actionType.ADD_TASK,
        payload: {
            task
        } 
    }
};

export const removeTask = id => {
    return {
        type: actionType.REMOVE_TASK,
        payload: {
            id
        } 
    }
};
