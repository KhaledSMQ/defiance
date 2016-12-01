
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GameLobbyComponent } from './components/game-lobby/game-lobby.component';
import { GamePlayComponent } from './components/game-play/game-play.component';
import { GameCreationComponent } from "./components/game-creation/game-creation.component";
import { PlayerLoginComponent } from "./components/player-login/player-login.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'game/create',
    component: GameCreationComponent
  },
  {
    path: 'game/:id/lobby',
    component: GameLobbyComponent
  },
  {
    path: 'game/:id/play',
    component: GamePlayComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
