import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Angular Material
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

// Components
import {RequestLoadingComponent} from './request-loading/request-loading.component';


@NgModule({
  declarations: [
    RequestLoadingComponent
  ],
  exports: [
    RequestLoadingComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule {
}
