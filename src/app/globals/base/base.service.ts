import {environment} from "../../../environments/environment";

export class BaseService {
  protected baseUrl: string;

  constructor() {
    this.baseUrl = environment.baseUrl;
  }
}
