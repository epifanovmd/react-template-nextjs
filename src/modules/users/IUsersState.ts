import {LoadState} from "../../common/loadState";
import {IResponse} from "../../common/response";
import {IUsers} from "../../api/dto/Users.g";

export interface IUsersState {
  users: IResponse<IUsers[]>;
}

export const usersInitialState: IUsersState = {
  users: {
    items: [],
    loadState: LoadState.needLoad,
  },
};
