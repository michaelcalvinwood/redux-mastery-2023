// action.js contains the factory for producing action dispatch objects
import { createAction } from '@reduxjs/toolkit';
import * as actionType from './actionTypes';

export const addTask = createAction("ADD_TASK");
export const removeTask = createAction("REMOVE_TASK");
export const markCompleted = createAction("MARK_COMPLETED");


