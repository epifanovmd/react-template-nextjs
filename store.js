import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { counterReduser } from "./store/reducers/counter";

const exampleInitialState = {
    count: 0
};

export function initializeStore(initialState = exampleInitialState) {
    return createStore(counterReduser, initialState, applyMiddleware(thunkMiddleware))
}
