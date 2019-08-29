import {actionCreator} from "./common/actionCreator";
import {Users} from "../api/dto/Users.g";

export class SsrActions {
  static ssrSetUsers = actionCreator<Users[]>("ssr/GET_USERS");
}
