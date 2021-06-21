import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-request-loading',
  templateUrl: './request-loading.component.html',
  styleUrls: ['./request-loading.component.scss']
})
export class RequestLoadingComponent implements OnInit {

  @Input() isLoading: boolean = true;
  @Input() diameter: number = 45;
  @Input() isError: boolean = true;
  @Input() messageError: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
