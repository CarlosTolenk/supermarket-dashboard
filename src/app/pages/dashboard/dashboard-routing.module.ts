import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {DashboardPageComponent} from './constainers/dashboard-page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class DashboardRoutingModule {
}
