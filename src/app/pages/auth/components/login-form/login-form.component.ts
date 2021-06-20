import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

// Interfaces
import {IRequestCredential} from "../../interfaces";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() sendLoginForm = new EventEmitter<IRequestCredential>();
  public form: FormGroup;
  public userEmail = 'tobias.funke@reqres.in';
  public userPassword = 'admin';

  constructor() {
    this.form = new FormGroup({
      email: new FormControl(this.userEmail, [Validators.required, Validators.email]),
      password: new FormControl(this.userPassword, [Validators.required])
    });
  }

  public ngOnInit(): void {

  }

  public login(): void {
    if (this.form.valid) {
      const {email, password} = this.form.value;
      this.sendLoginForm.emit({email, password});
    }
  }

}
