import {Component, OnInit} from '@angular/core';

// Routes
import {RoutesApp} from "../../globals/consts";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  public routes: typeof RoutesApp = RoutesApp;

  constructor() {
  }

}
