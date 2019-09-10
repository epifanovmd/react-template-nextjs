/*tslint:disable*/
import {BaseRequest} from "./BaseRequest";
import {Users} from "./dto/Users.g";
import {RequestType} from "../common/requestType";

export class UsersApiRequest extends BaseRequest {
  get(config?: Object): Promise<Users[]> {
    return this.fetch(
      `/api/users`,
      Object.assign({
        method: RequestType.GET
      }, config))
      .then((response) => response.json())
      .catch(BaseRequest.handleError);
  }
}
