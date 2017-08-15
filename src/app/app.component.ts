import { Component } from '@angular/core';
 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  readonly title: string;

  constructor() {
  	this.title = 'Tour of Heroes Materialized';
  }
}