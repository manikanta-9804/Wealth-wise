import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  logged : boolean = false;

  constructor(){}

  ngOnInit(){

  }
  title = 'WealtWise';
}
