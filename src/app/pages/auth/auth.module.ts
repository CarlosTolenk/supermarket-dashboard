import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Routes
import {AuthRoutingModule} from "./auth-routing.module";

// Components
import {LoginFormComponent, SignFormComponent} from './components';

// Containers
import {AuthPageComponent} from './containers';

@NgModule({
  declarations: [
    LoginFormComponent,
    SignFormComponent,
    AuthPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ]
})
export class AuthModule {
}
