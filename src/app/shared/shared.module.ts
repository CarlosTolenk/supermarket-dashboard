import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

// Angular Material
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';

// Modules
import {HeaderModule} from "./components/header/header.module";

// Services
import {SnackBarService} from "./services/snack-bar.service";

// Containers
import {HeaderComponent} from './components/header/containers';

// Components
import {RequestLoadingComponent} from './components/request-loading/request-loading.component';
import {FooterComponent} from './components/footer/footer.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {LayoutComponent} from './components/layout/layout.component';


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
    MatSnackBarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule
  ],
  providers: [SnackBarService]
})
export class SharedModule {
}
