import {combineReducers, Reducer} from "redux";
import {IAppState} from "../IAppState";
import {mainPageReducer} from "../../modules/users/usersReducer";

export type Reducers<T> = {
  [P in keyof T]: Reducer<T[P]>;
};

export function createMainReduce(): Reducer<IAppState> {
  const _reducers: Reducers<IAppState> = {
    usersPage: mainPageReducer,
  };

  return combineReducers(_reducers);

}
