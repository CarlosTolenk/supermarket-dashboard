import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

// Services
import {UserService} from "../../services/user.service";
import {SnackBarService} from "../../../../shared/services/snack-bar.service";
import {User} from "../../models/user";
import {IRequestUpdateUser, IResponseCreateUser} from "../../interfaces";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public form: FormGroup;
  public modeCreate: boolean = true;
  public userCreated: IResponseCreateUser;
  public isUserCreated: boolean;
  public isUserUpdated: boolean;

  constructor(
    private snackBarService: SnackBarService,
    private userService: UserService
  ) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      job: new FormControl('', [Validators.required])
    });
    this.userCreated = {id: '1', name: 'Carlos ', job: 'Developer', createdAt: new Date()}
    this.isUserCreated = false;
    this.isUserUpdated = false;
  }

  ngOnInit(): void {
  }

  onSubmitForm(): void {
    if (this.form.valid) {
      this.openSnackBar('Process Action....', 'Wait');
      if (this.modeCreate) {
        this.createUser();
      } else {
        const user = new User(2, '', '', '', '');
        this.updateUser(user)
      }
    }
  }

  onUpdateUser() {
    this.isUserCreated = false;
    this.modeCreate = false;
    this.form.setValue(
      {
        name: this.userCreated.name,
        job: this.userCreated.job
      });
  }

  createUser(): void {
    const {name, job} = this.form.value;
    this.userService.create({name, job})
      .subscribe((response) => {
        this.setUserTemporal(response);
        this.closeSnackBar();
        this.openSnackBar('User Created', 'Successfully');
        this.closeSnackBar();
        this.form.reset();
      });
  }

  updateUser(user: User): void {
    const {name, job} = this.form.value;
    this.userService.update({name, job, id: user.id})
      .subscribe((response) => {
        this.closeSnackBar();
        this.openSnackBar('User Updated', 'Successfully');
        this.closeSnackBar();
        this.isUserCreated = true;
        this.isUserUpdated = true;
        this.userCreated = {
          id: String(user.id),
          name: response.name,
          job: response.job,
          createdAt: new Date(response.updatedAt)
        }
      });
  }

  setUserTemporal(response: IResponseCreateUser) {
    this.isUserCreated = true;
    this.userCreated = response;
  }

  openSnackBar(message: string, action: string) {
    this.snackBarService.openSnackBar(message, action);
  }

  closeSnackBar(): void {
    this.snackBarService.closeSnackBar();
  }

}
