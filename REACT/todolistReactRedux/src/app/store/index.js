import { taskReducer } from '../store/reducers';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { logger } from './logger';

const initialState = {
    tasks: []
};

export const store = createStore(taskReducer, initialState, applyMiddleware(logger));