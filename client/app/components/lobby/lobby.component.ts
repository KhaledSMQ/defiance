
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Game } from "../../models/game";
import { LobbyService } from "../../services/lobby.service";

@Component({
    selector: 'lobby',
    templateUrl: './app/components/lobby/lobby.component.html',
    styleUrls: ['./app/components/lobby/lobby.component.css']
})

export class LobbyComponent implements OnInit {
    games: Game[] = [];

    constructor(
        private router: Router,
        private lobbyService: LobbyService) {
    }

    ngOnInit() {
        this.lobbyService.getGames()
            .then(games => this.games = this.sortGames(games));
    }

    sortGames(heroes: Game[]): Game[] {
        return heroes;
    }

    gotoDetail(game: Game) {
        let link = ['/detail', game._id];
        this.router.navigate(link);
    }
}
