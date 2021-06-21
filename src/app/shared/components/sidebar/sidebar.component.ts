import {Component} from '@angular/core';
import {RoutesApp} from "../../../globals/consts";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public routes: typeof RoutesApp = RoutesApp;
  public isOpenUiElements = false;

  constructor() {
  }

  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }

}
