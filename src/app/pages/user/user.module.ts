import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';

// Modules
import {SharedModule} from "../../shared/shared.module";

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
    UserRoutingModule,
    MatToolbarModule,
    SharedModule
  ]
})
export class UserModule {
}
