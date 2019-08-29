import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {logger} from "redux-logger";
import {createMainReduce} from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";

const Middleware =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
    : composeWithDevTools(applyMiddleware(thunkMiddleware));

const reducers = createMainReduce();
export const store = createStore(
  reducers,
  Middleware,
);
