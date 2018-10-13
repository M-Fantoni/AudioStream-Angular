import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Environment } from '../environments/environment';
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
  

  constructor(public db: AngularFireDatabase,public displaying: DisplayService){  
    
  }

  public togglePlayer(url: string):void{
    console.log("button clicked")
    this.displaying.toggle(true, url)
  }
}
