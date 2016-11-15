
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { LobbyComponent } from './components/lobby/lobby.component';
import { GameComponent } from './components/game/game.component';

import { LobbyService } from './services/lobby.service';
import { GameService } from './services/game.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    LobbyComponent,
    GameComponent
  ],
  providers: [
    LobbyService,
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
