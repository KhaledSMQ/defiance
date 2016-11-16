
import { Component, OnInit } from '@angular/core';
import { GameService } from "../../services/game.service";
import { Game } from "../../models/game";
import { Router } from '@angular/router';

@Component({
    selector: 'dashboard',
    templateUrl: './app/components/dashboard/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    games: Game[];

    displayedGame: Game;

    error: any;

    constructor(
        private router: Router,
        private gameService: GameService) { }

    getGames() {
        this.gameService.getGames().then(games => this.games = games);
    }

    ngOnInit() {
        this.getGames();
    }

    create() {
        this.router.navigate(['game', 'create']);
    }

    displayInfo(game: Game) {
        this.displayedGame = game;
    }

    closeDisplayInfo() {
        this.displayedGame = null;
    }

    join(game: Game) {
        this.router.navigate(['game', game._id, 'lobby']);
    }
}
