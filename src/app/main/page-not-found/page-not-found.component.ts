import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent{

  errorCode: string;
  message: string;

  constructor() {
    this.errorCode = '404 ERROR';
    this.message = 'For some reason the page you requested could not be found on server.';
   }
}
