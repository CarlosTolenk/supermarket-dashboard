import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

// Const
import {RoutesApp} from '../../../globals/consts';
import {TOKEN_USER} from "../consts";

@Injectable()
export class AuthGuard implements CanActivate {
  public routers: typeof RoutesApp = RoutesApp;

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem(TOKEN_USER);

    if (token) {
      return true;
    } else {
      this.router.navigate([this.routers.LOGIN]);
      return false;
    }
  }
}
