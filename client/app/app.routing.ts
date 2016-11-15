
import { Routes, RouterModule } from '@angular/router';

import { LobbyComponent } from './components/lobby/lobby.component';
import { GameComponent } from './components/game/game.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/lobby',
    pathMatch: 'full'
  },
  {
    path: 'lobby',
    component: LobbyComponent
  },
  {
    path: 'game',
    component: GameComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
