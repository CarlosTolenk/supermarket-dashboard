import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';

// import {Email, User} from '../../../../pages/auth/models';
// import {AuthService, EmailService} from '../../../../pages/auth/services';
import {RoutesApp} from '../../../../globals/consts';
import {AuthService} from "../../../../pages/auth/services/auth.service";
import {UserService} from "../../../../pages/user/services/user.service";
import {User} from "../../../../pages/user/models/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() isMenuOpened: boolean = false;
  @Output() isShowSidebar = new EventEmitter<boolean>();
  public user$: Observable<User>
  public routers: typeof RoutesApp = RoutesApp;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
    this.user$ = this.userService.getById();
  }

  public openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;

    this.isShowSidebar.emit(this.isMenuOpened);
  }

  public signOut(): void {
    this.authService.logout();
    this.router.navigate([this.routers.LOGIN]).then();
  }
}
