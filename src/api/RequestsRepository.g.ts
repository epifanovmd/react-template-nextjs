import {UsersApiRequest} from "./UsersApiRequest.g";

export class RequestsRepository{
  usersApiRequest = new UsersApiRequest();
}

export const requestRepository = new RequestsRepository();
