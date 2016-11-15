
import { Component, OnInit } from '@angular/core';
import { GameService } from "../../services/game.service";
import { Game } from "../../models/game";
import { Router } from '@angular/router';

@Component({
    selector: 'game',
    templateUrl: './app/components/game/game.component.html'
})

export class GameComponent implements OnInit {

    games: Game[];
    selectedGame: Game;
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
    onSelect(game: Game) { this.selectedGame = game; }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedGame._id]);
    }

    addHero() {
        this.selectedGame = null;
        this.router.navigate(['/detail', 'new']);
    }
}
