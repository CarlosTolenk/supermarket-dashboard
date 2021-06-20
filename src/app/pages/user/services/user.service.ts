import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

// Base
import {BaseService} from "../../../globals/base";

// Interfaces
import {IResponseUserSingle, IResponseUserList} from "../interfaces";

// Models
import {User} from "../models/user";


@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getById(id: number = 2): Observable<User> {
    return this.http.get<IResponseUserSingle>(`${this.baseUrl}/api/users/${id}`)
      .pipe(
        map((response) => {
          return new User(
            response.data.id,
            response.data.email,
            response.data.first_name,
            response.data.last_name,
            response.data.avatar,
          );
        })
      );
  }

  getAll(page: number = 1, perPage: number = 12): Observable<User[]> {
    return this.http.get<IResponseUserList>(`${this.baseUrl}/api/users?page=${page}&per_page=${perPage}`)
      .pipe(
        map((response) => {
          return response.data.map((userI) => {
            return new User(
              userI.id,
              userI.email,
              userI.first_name,
              userI.last_name,
              userI.avatar,
            );
          });
        })
      )
  }

  deleteById(id: number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/api/users/${id}`)
      .pipe(
        map((response) => {
          return response === null;
        })
      )
  }
}
