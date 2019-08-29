import {actionCreator} from "../../store/common/actionCreator";
import {IEmpty} from "../../common/IEmpty";
import {Users} from "../../api/dto/Users.g";

export class MainPageActions {
  static getUsers = actionCreator.async<IEmpty, Users[], Error>("Main/GET_USERS");
}

export class SsrActions {
  static ssrSetUsers = actionCreator<Users[]>("ssr/GET_USERS");
}
