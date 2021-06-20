import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';

// Routes
import {DashboardRoutingModule} from "./dashboard-routing.module";

// Modules
import {SharedModule} from "../../shared/shared.module";

// Containers
import {DashboardPageComponent} from './constainers/dashboard-page';


@NgModule({
  declarations: [
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    SharedModule
  ]
})
export class DashboardModule {
}
