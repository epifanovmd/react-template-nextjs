import {reducerWithInitialState} from "typescript-fsa-reducers";
import {IUsersState, usersInitialState} from "./IUsersState";
import {UsersPageActions} from "./usersPageActions";
import {newState} from "../../store/common/newState";
import {LoadState} from "../../common/loadState";
import {Success} from "typescript-fsa";
import {IEmpty} from "../../common/IEmpty";
import {IUsers} from "../../api/dto/Users.g";

function getUsersStartedHandler(state: IUsersState): IUsersState {
  return newState(state, {users: {
      loadState: LoadState.refreshing,
      items: state.users.items,
    }});
}

function getUsersDoneHandler(state: IUsersState, {result: users}: Success<IEmpty, IUsers[]>): IUsersState {
  return newState(state, newState(state, {users: {
      loadState: LoadState.idle,
      items: users,
    }}));
}

function getUsersFailedHandler(state: IUsersState): IUsersState {
  return newState(state, newState(state, {users: {
      loadState: LoadState.error,
      items: state.users.items,
    }}));
}

export const mainPageReducer = reducerWithInitialState(usersInitialState)
  .case(UsersPageActions.getUsers.started, getUsersStartedHandler)
  .case(UsersPageActions.getUsers.done, getUsersDoneHandler)
  .case(UsersPageActions.getUsers.failed, getUsersFailedHandler)
  .build();
