import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private _snackBar: MatSnackBar,
    private userService: UserService
  ) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      job: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  onSubmitForm(): void {
    if (this.form.valid) {
      const {name, job} = this.form.value;
      this.userService.create({name, job})
    }
  }

}
