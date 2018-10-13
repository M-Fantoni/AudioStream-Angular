import { Component } from '@angular/core';
import { Environment } from '../firebase-env/firebase-env';
import { Observable } from 'rxjs';
import { PlayerComponent } from './Player/player.component';
import { DisplayService } from '../Services/display.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  items: Observable<any[]>;
  testResult: string = "";
  test: any;
  

  constructor(public displaying: DisplayService){  
    
  }

  public togglePlayer(url: string):void{
    console.log("button clicked")
    this.displaying.toggle(true, url)
  }
}
