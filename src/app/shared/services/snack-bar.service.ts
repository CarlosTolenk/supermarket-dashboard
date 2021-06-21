import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackBar: MatSnackBar) {
  }

  public openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  public closeSnackBar(): void {
    setTimeout(() => {
      this._snackBar.dismiss();
    }, 2000)
  }
}
