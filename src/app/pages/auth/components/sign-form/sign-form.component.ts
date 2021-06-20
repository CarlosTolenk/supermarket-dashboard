import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IRequestCredential} from "../../interfaces";

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.scss']
})
export class SignFormComponent {

  @Output() sendSignForm = new EventEmitter<IRequestCredential>();
  public form: FormGroup;
  public emailSignValid: string = 'rachel.howell@reqres.in'

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
        email: new FormControl(this.emailSignValid, [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required])
      },
      {validators: this.checkPasswords});
  }

  checkPasswords(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    return password === confirmPassword ? null : {notSame: true}
  }

  public sign(): void {
    if (this.form.valid) {
      const {email, password} = this.form.value;
      this.sendSignForm.emit({email, password});
    }
  }

}
