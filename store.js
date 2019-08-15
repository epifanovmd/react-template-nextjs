import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {createMainReduce} from "./src/store/reducers";

const exampleInitialState = {};

const Middleware = applyMiddleware(thunkMiddleware);

export function initializeStore(initialState = exampleInitialState) {
  const reducers = createMainReduce();
  return createStore(
    reducers,
    initialState,
    Middleware
  );
}
