import {IUser, Support} from "./response-user-single.interface";

export interface IResponseUserList {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
  support: Support;
}
