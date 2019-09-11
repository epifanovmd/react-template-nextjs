import {SimpleThunk} from "../../common/simpleThunk";
import {UsersPageActions} from "./usersPageActions";
import {Dispatch} from "react";
import {requestRepository} from "../../api/RequestsRepository.g";
import {popup} from "../../common/popup";
import {IUsers} from "../../api/dto/Users.g";

export class UsersPageThunk {
  static getUsers(callback?: (users: IUsers[]) => void): SimpleThunk {
    return async (dispatch: Dispatch<any>): Promise<void> => {
      const params = {};
      dispatch(UsersPageActions.getUsers.started(params));
      try {
        const result = await requestRepository.usersApiRequest.get();
        callback && callback(result);
        dispatch(UsersPageActions.getUsers.done({params, result}));
      } catch (error) {
        popup.error(error.type);
        dispatch(UsersPageActions.getUsers.failed({params, error}));
      }
    };
  }
}
