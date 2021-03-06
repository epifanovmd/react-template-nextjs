/*tslint:disable*/

import {Address} from "./Address.g";
import {Company} from "./Company.g";

export interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address,
  phone: string;
  website: string;
  company: Company;
}
