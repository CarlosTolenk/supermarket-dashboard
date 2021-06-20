import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

// Angular Material
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav'

// Modules
import {HeaderModule} from "./header/header.module";

// Containers
import {HeaderComponent} from './header/containers';

// Components
import {RequestLoadingComponent} from './request-loading/request-loading.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {LayoutComponent} from './layout/layout.component';


@NgModule({
  declarations: [
    RequestLoadingComponent,
    FooterComponent,
    SidebarComponent,
    LayoutComponent
  ],
  exports: [
    RequestLoadingComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule
  ]
})
export class SharedModule {
}
