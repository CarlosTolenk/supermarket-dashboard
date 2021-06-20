import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Routes
import {UserRoutingModule} from "./user-routing.module";

// Containers
import {UserPageComponent} from './containers';


@NgModule({
  declarations: [
    UserPageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule {
}
