import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

// Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

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
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    SharedModule
  ],
  providers: [UserService]
})
export class UserModule {
}
