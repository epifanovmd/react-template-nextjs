import {actionCreator} from "../../store/common/actionCreator";
import {IEmpty} from "../../common/IEmpty";
import {Users} from "../../api/dto/Users.g";

export class UsersPageActions {
  static getUsers = actionCreator.async<IEmpty, Users[], Error>("Users/GET_USERS");
}
