import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PlayerComponent } from './Player/player.component'

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(Environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  declarations: [ AppComponent, HelloComponent, PlayerComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
