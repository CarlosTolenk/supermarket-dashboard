import {Component, EventEmitter, Input, Output} from '@angular/core';

import {RoutesApp} from '../../../../../globals/consts';

// Models
import {User} from "../../../../../pages/user/models/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  // @ts-ignore
  @Input() user: User
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();

  public routes: typeof RoutesApp = RoutesApp;

  public signOutEmit(): void {
    this.signOut.emit();
  }
}
