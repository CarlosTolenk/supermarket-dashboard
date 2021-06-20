import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {UserPageComponent, UserFormComponent} from './containers';

const routes: Routes = [
  {
    path: 'list',
    component: UserPageComponent
  },
  {
    path: 'form',
    component: UserFormComponent
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
