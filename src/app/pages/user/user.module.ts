import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

// Modules
import {SharedModule} from "../../shared/shared.module";

// Routes
import {UserRoutingModule} from "./user-routing.module";

// Services
import {UserService} from "./services/user.service";

// Containers
import {UserPageComponent, UserFormComponent} from './containers';

// Components
import {UserCardComponent} from './components';


@NgModule({
  declarations: [
    UserPageComponent,
    UserFormComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    SharedModule
  ],
  providers: [UserService]
})
export class UserModule {
}
