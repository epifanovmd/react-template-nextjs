import {SimpleThunk} from "../../common/simpleThunk";
import {MainPageActions} from "./mainPageActions";
import {Dispatch} from "react";
import {requestRepository} from "../../api/RequestsRepository.g";
import {popup} from "../../common/popup";

export class MainPageThunk {
  static getUsers(): SimpleThunk {
    return async (dispatch: Dispatch<any>): Promise<void> => {
      const params = {};
      dispatch(MainPageActions.getUsers.started(params));
      try {
        const result = await requestRepository.usersApiRequest.get();
        dispatch(MainPageActions.getUsers.done({params, result}));
      } catch (error) {
        popup.error(error.type);
        dispatch(MainPageActions.getUsers.failed({params, error}));
      }
    };
  }
}
