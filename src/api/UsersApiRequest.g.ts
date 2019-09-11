/*tslint:disable*/
import {BaseRequest} from "./BaseRequest";
import {RequestType} from "../common/requestType";
import {IUsers} from "./dto/Users.g";

export class UsersApiRequest extends BaseRequest {
  get(config?: Object): Promise<IUsers[]> {
    return this.fetch(
      `/api/users`,
      Object.assign({
        method: RequestType.GET
      }, config))
      .then((response) => response.json())
      .catch(BaseRequest.handleError);
  }
}
