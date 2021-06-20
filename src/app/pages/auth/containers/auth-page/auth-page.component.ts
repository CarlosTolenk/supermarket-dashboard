import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

import {RoutesApp} from '../../../../globals/consts';

// Interfaces
import {IRequestCredential} from "../../interfaces";

// Services
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  public todayDate: Date = new Date();
  public routesApp: typeof RoutesApp = RoutesApp;
  public companyName: string = 'SuperMarket Admin';

  public isLoadingLogin: boolean = false;
  public isLoadingLoginError: boolean = false;
  public messageLoginError: string = '';

  public isLoadingSign: boolean = false;
  public isLoadingSignError: boolean = false;
  public messageSignError: string = '';


  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    if (this.authService.isUserLogged()) {
      this.goToDashboard();
    }
  }

  public sendLoginForm(requestCredential: IRequestCredential): void {
    this.isLoadingLogin = true;
    this.isLoadingLoginError = false;
    this.authService.login(requestCredential).subscribe(
      (data) => {
        console.log(data);
        this.isLoadingLogin = false;
        this.goToDashboard();
      },
      ({error}: HttpErrorResponse) => {
        console.log(error);
        this.isLoadingLogin = false;
        this.isLoadingLoginError = true;
        this.messageLoginError = error.error;
      }
    )
  }

  public sendSignForm(requestCredential: IRequestCredential): void {
    this.isLoadingSign = true;
    this.isLoadingSignError = false;
    this.authService.register(requestCredential).subscribe(
      (data) => {
        console.log(data);
        this.isLoadingSign = false;
        this.goToDashboard();
      },
      ({error}: HttpErrorResponse) => {
        console.log(error);
        this.isLoadingSign = false;
        this.isLoadingSignError = true;
        this.messageSignError = error.error;
      }
    )
  }

  goToDashboard(): void {
    this.router.navigate([this.routesApp.DASHBOARD]).then();
  }

}
