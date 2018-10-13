import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PlayerComponent } from './Player/player.component'

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
  ],
  declarations: [ AppComponent, HelloComponent, PlayerComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
