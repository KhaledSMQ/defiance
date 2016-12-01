
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardGameEntryComponent } from './components/dashboard-game-entry/dashboard-game-entry.component';
import { DashboardGameDetailsComponent } from './components/dashboard-game-details/dashboard-game-details.component';
import { GameCreationComponent } from './components/game-creation/game-creation.component';
import { GameLobbyComponent } from './components/game-lobby/game-lobby.component';
import { GamePlayComponent } from './components/game-play/game-play.component';
import { PlayerLoginComponent } from "./components/player-login/player-login.component";

import { RestService } from './services/rest.service';
import { GameService } from './services/game.service';
import { PlayerService } from './services/player.service';
import { SocketService } from "./services/socket.service";
import { CookieService } from 'angular2-cookie/services/cookies.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],

  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardGameEntryComponent,
    DashboardGameDetailsComponent,
    GameCreationComponent,
    GameLobbyComponent,
    GamePlayComponent,
    PlayerLoginComponent
  ],
  providers: [
    RestService,
    GameService,
    PlayerService,
    CookieService,
    SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
