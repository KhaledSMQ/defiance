
import { Component, OnInit, Input } from '@angular/core';
import { GameService } from "../../services/game.service";
import { Game } from "shared/models/game";
import { Router } from '@angular/router';

@Component({
    selector: 'dashboard-game-details',
    templateUrl: './app/components/dashboard-game-details/dashboard-game-details.component.html',
    styleUrls: ['./app/components/dashboard-game-details/dashboard-game-details.component.css']
})

export class DashboardGameDetailsComponent implements OnInit {
    @Input()
    game: Game;

    error: any;

    constructor(
        private router: Router,
        private gameService: GameService) { }

    ngOnInit() {
    }
}
