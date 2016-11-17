
import { Component, OnInit } from '@angular/core';
import { GameService } from "../../services/game.service";
import { Game } from "../../models/game";
import { Router } from '@angular/router';

@Component({
    selector: 'dashboard',
    templateUrl: './app/components/dashboard/dashboard.component.html',
    styleUrls: ['./app/components/dashboard/dashboard.component.css']
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
        // check if user is logged in, if so continue and fetch games.
        if (this.isUserLoggedIn()) {
            this.getGames();
        } else {
            // if not, proceed to login form.
            this.router.navigate(['login']);
        }
    }

    private isUserLoggedIn(): boolean {
        return true;
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
