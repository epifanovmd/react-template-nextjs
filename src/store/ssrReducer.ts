import {reducerWithInitialState} from "typescript-fsa-reducers";
import {newState} from "./common/newState";
import {SsrActions} from "./ssrActions";
import {ISsrState, ssrInitialState} from "./ISsrState";
import {Users} from "../api/dto/Users.g";

function ssrSetUsersHandler(state: ISsrState, users: Users[]): ISsrState {
  return newState(state, newState(state, {users}));
}

export const ssrReducer = reducerWithInitialState(ssrInitialState)
  .case(SsrActions.ssrSetUsers, ssrSetUsersHandler)
  .build();
