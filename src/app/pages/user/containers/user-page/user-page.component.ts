import {Component, OnInit} from '@angular/core';

// Models
import {User} from "../../models/user";

// Services
import {UserService} from "../../services/user.service";
import {SnackBarService} from "../../../../shared/services/snack-bar.service";


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  // @ts-ignore
  public users: User[];

  constructor(
    private snackBarService: SnackBarService,
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
        this.closeSnackBar();
      }
    });
  }

  onUpdateUser(user: User): void {
    console.group('onDeleteUser');
    console.log(user);
    console.groupEnd();
  }

  openSnackBar(message: string, action: string) {
    this.snackBarService.openSnackBar(message, action);
  }

  closeSnackBar(): void {
    this.snackBarService.closeSnackBar();
  }

}
