import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

// Angular Material
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";

// Modules
import {SharedModule} from "../../shared/shared.module";

// Routes
import {AuthRoutingModule} from "./auth-routing.module";

// Pipes
import {YearPipe} from './pipes';

// Components
import {LoginFormComponent, SignFormComponent} from './components';

// Containers
import {AuthPageComponent} from './containers';

@NgModule({
  declarations: [
    LoginFormComponent,
    SignFormComponent,
    AuthPageComponent,
    YearPipe
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class AuthModule {
}
