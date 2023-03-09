// action.js contains the factory for producing action dispatch objects

export const addTask = task => {
    return {
        type: 'ADD_TASK',
        payload: {
            task
        } 
    }
};

export const removeTask = id => {
    return {
        type: 'REMOVE_TASK',
        payload: {
            id
        } 
    }
};
