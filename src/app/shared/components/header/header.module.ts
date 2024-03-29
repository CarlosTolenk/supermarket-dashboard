import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Angular Material
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';

// Pipes
import {ShortNamePipe} from './pipes';

// Containers
import {HeaderComponent} from './containers';

// Components
import {
  UserComponent, SearchComponent
} from './components';


@NgModule({
  declarations: [
    HeaderComponent,
    UserComponent,
    SearchComponent,
    ShortNamePipe
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatBadgeModule
  ]
})
export class HeaderModule {
}
