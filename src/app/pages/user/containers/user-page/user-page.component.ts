import {Component, OnInit} from '@angular/core';

// Angular Material
import {MatSnackBar} from "@angular/material/snack-bar";

// Models
import {User} from "../../models/user";

// Services
import {UserService} from "../../services/user.service";


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  // @ts-ignore
  public users: User[];

  constructor(
    private _snackBar: MatSnackBar,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe((users) => {
      this.users = users;
    })
  }

  trackBy(index: number, item: User) {
    return item.id;
  }

  onDeleteUser(id: number): void {
    this.openSnackBar('Process Action....', 'Wait');
    this.userService.deleteById(id).subscribe((isCorrectAction) => {
      this.closeSnackBar();
      if (isCorrectAction) {
        this.users = this.users.filter((user) => user.id !== id);
        this.openSnackBar('User Removed', 'Successfully');
        setTimeout(() => {
          this.closeSnackBar();
        }, 2000)
      }
    });
  }

  onUpdateUser(user: User): void {
    console.group('onDeleteUser');
    console.log(user);
    console.groupEnd();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  closeSnackBar(): void {
    this._snackBar.dismiss();
  }

}
