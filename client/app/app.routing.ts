
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GameLobbyComponent } from './components/game-lobby/game-lobby.component';
import { GameCreationComponent } from "./components/game-creation/game-creation.component";

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
    component: GameLobbyComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
