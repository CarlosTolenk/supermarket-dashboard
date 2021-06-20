import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();
  @Output() updateUser: EventEmitter<User> = new EventEmitter<User>();

  // @ts-ignore
  @Input() user: User;

  constructor() {
  }

  onDeleteUser(user: User): void {
    this.deleteUser.emit(user.id);
  }

  onUpdateUser(user: User): void {
    this.updateUser.emit(user);
  }

}
