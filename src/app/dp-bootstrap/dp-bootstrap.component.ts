import { Component, OnInit } from '@angular/core';

import {IAngularMyDpOptions, IMyDateModel} from 'angular-mydatepicker';

@Component({
  selector: 'app-dp-bootstrap',
  templateUrl: './dp-bootstrap.component.html',
  styleUrls: ['./dp-bootstrap.component.css']
})
export class DpBootstrapComponent implements OnInit {

  private myOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd.mm.yyyy'
  };

  private model: IMyDateModel = null;

  constructor() { }

  // optional date changed callback
  onDateChanged(event: IMyDateModel): void {
    console.log('onDateChanged(): ', event);
  }

  ngOnInit() {
  }

}