import {Users} from "../api/dto/Users.g";

export interface ISsrState {
  users: Users[];
}

export const ssrInitialState: ISsrState = {
  users: [],
};
