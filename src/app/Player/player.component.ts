import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DisplayService } from '../../Services/display.service';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: [ './player.component.css' ]
})
export class PlayerComponent  {
  items: any[];
  TrackUrl: string;
  show: boolean = false;
  volume: number;

  constructor(displaying: DisplayService){
    displaying.display$.subscribe(res => 
    {
      console.log("player called");
      console.log(this.show);
      console.log(this.TrackUrl);
      this.show = res.isOpen;
      this.TrackUrl = res.url;
      this.volume = 0.1;
    });
  }
}