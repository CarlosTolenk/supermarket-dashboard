import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

// Base
import {BaseService} from "../../../globals/base";
import {IRequestCredential, IResponseLogin, IResponseRegister} from "../interfaces";

// Constants
import {TOKEN_USER} from "../consts";


@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  constructor(
    private http: HttpClient) {
    super();
  }


  register(requestCredential: IRequestCredential) {
    return this.http.post<IResponseRegister>(`${this.baseUrl}/api/register`, requestCredential)
      .pipe(
        map((response: IResponseRegister) => {
          if (response && response?.token) {
            localStorage.setItem(TOKEN_USER, response.token)
          }
          return response;
        })
      );
  }

  login(requestCredential: IRequestCredential) {
    return this.http.post<IResponseLogin>(`${this.baseUrl}/api/login`, requestCredential)
      .pipe(
        map((response: IResponseLogin) => {
          if (response && response?.token) {
            localStorage.setItem(TOKEN_USER, response.token)
          }
          return response;
        })
      );
  }

  isUserLogged(): boolean {
    const token = localStorage.getItem(TOKEN_USER);
    return !!token;
  }

  logout(): void {
    localStorage.removeItem(TOKEN_USER);
  }
}
