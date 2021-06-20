import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {UserPageComponent} from './containers';

const routes: Routes = [
  {
    path: '',
    component: UserPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class UserRoutingModule {
}
