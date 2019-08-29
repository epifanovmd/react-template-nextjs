import {combineReducers, Reducer} from "redux";
import {IAppState} from "../IAppState";
import {mainPageReducer} from "../../modules/main/mainReducer";
import {ssrReducer} from "../ssrReducer";

export type Reducers<T> = {
  [P in keyof T]: Reducer<T[P]>;
};

export function createMainReduce(): Reducer<IAppState> {
  const _reducers: Reducers<IAppState> = {
    mainPage: mainPageReducer,
    ssr: ssrReducer
  };

  return combineReducers(_reducers);

}
