
import { Component, AfterViewInit } from '@angular/core';
import { GameService } from "../../services/game.service";
import { SocketService } from "../../services/socket.service";
import { Game } from "../../models/game";
import { Router } from '@angular/router';
import { SessionInfo } from "../../session/session-info";

@Component({
    selector: 'dashboard',
    templateUrl: './app/components/dashboard/dashboard.component.html',
    styleUrls: ['./app/components/dashboard/dashboard.component.css']
})

export class DashboardComponent implements AfterViewInit {
    games: Game[];

    displayedGame: Game;

    error: any;

    constructor(
        private router: Router,
        private gameService: GameService,
        private socketService: SocketService) { }

    getGames() {
        this.gameService.getGames().then(games => this.games = games);
    }

    ngAfterViewInit() {
        this.getGames();
        this.socketService.subscribe<Game>("gameCreated", (data) => this.gameCreated(data));
        this.socketService.subscribe<Game>("gameUpdated", (data) => this.gameUpdated(data));
    }

    gameCreated(game: Game) {
        this.games.push(game);
    }

    gameUpdated(game: Game) {
        let gameIndex: number = this.findGame(game);

        if (gameIndex >= 0) {
            this.games[gameIndex] = game;
        }
    }

    findGame(seekGame: Game): number {
        for (let gameIndex in this.games) {
            if (seekGame._id === this.games[gameIndex]._id) {
                return +gameIndex;
            }
        }

        return -1;
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
        this.gameService.joinGame(game, SessionInfo.Player).then(joinedGame => {
            let res: any = joinedGame;
            if (res.error) {
                this.error = res.error;
            } else {
                SessionInfo.GameActive = true;
                this.socketService.send("joinGame", { game: game._id });
                this.router.navigate(['game', game._id, 'lobby']);
            }
        });

    }
}
