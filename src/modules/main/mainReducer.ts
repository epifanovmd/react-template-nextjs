import {reducerWithInitialState} from "typescript-fsa-reducers";
import {IMainState, mainInitialState} from "./IMainState";
import {MainPageActions} from "./mainPageActions";
import {newState} from "../../store/common/newState";
import {LoadState} from "../../common/loadState";
import {Success} from "typescript-fsa";
import {IEmpty} from "../../common/IEmpty";
import {Users} from "../../api/dto/Users.g";
import {SsrActions} from "../../store/ssrActions";

function getUsersStartedHandler(state: IMainState): IMainState {
  return newState(state, {usersLoadState: LoadState.refreshing});
}

function getUsersDoneHandler(state: IMainState, {result: users}: Success<IEmpty, Users[]>): IMainState {
  return newState(state, newState(state, {usersLoadState: LoadState.idle, users}));
}

function getUsersFailedHandler(state: IMainState): IMainState {
  return newState(state, newState(state, {usersLoadState: LoadState.error}));
}

function ssrSetUsersHandler(state: IMainState, users: Users[]): IMainState {
  return newState(state, newState(state, {users}));
}


export const mainPageReducer = reducerWithInitialState(mainInitialState)
  .case(MainPageActions.getUsers.started, getUsersStartedHandler)
  .case(MainPageActions.getUsers.done, getUsersDoneHandler)
  .case(MainPageActions.getUsers.failed, getUsersFailedHandler)

  .case(SsrActions.ssrSetUsers, ssrSetUsersHandler)
  .build();
