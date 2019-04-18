import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {logger} from "redux-logger";
import {createMainReduce} from "./src/store/reducers";

const exampleInitialState = {};

const Middleware =
  process.env.NODE_ENV === "development"
    ? applyMiddleware(thunkMiddleware, logger)
    : applyMiddleware(thunkMiddleware);

export function initializeStore(initialState = exampleInitialState) {
  const reducers = createMainReduce();
  return createStore(
    reducers,
    initialState,
    Middleware
  );
}
