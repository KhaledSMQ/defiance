
import { Component, OnInit } from '@angular/core';
import { GameService } from "../../services/game.service";
import { Game } from "../../models/game";
import { SessionInfo } from "../../session/session-info";
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'game-creation',
    templateUrl: './app/components/game-creation/game-creation.component.html',
    styleUrls: ['./app/components/game-creation/game-creation.component.css']
})

export class GameCreationComponent implements OnInit {
    game: Game;

    error: any;

    constructor(
        private router: Router,
        private gameService: GameService) {
        this.game = new Game();
        this.game.createdBy = SessionInfo.Player.name;
    }

    ngOnInit(): void {
    }

    createGame(): void {
        if (this.verifyGame()) {
            this.gameService.createGame(this.game).then(createdGame => {
                let res: any = createdGame;
                if (res.error) {

                } else {
                    this.gameService.joinGame(createdGame, SessionInfo.Player).then(joinedGame => {
                        SessionInfo.GameActive = true;
                        this.router.navigate(['game', createdGame._id, 'lobby']);
                    });
                }
            });
        }
    }

    private verifyGame(): boolean {
        return this.game.name &&
            (this.game.numberOfPlayers >= 5 && this.game.numberOfPlayers <= 10);
    }

    toggleRole(role: string): void {
        if (this.hasRole(role)) {
            let index: number = this.game.roles.indexOf(role);
            this.game.roles.splice(index, 1);
        } else {
            this.game.roles.push(role);
        }
    }

    hasRole(role: string): boolean {
        return this.game.roles.indexOf(role) >= 0;
    }

    toggleItem(item: string): void {
        if (this.hasItem(item)) {
            let index: number = this.game.items.indexOf(item);
            this.game.items.splice(index, 1);
        } else {
            this.game.items.push(item);
        }
    }

    hasItem(item: string): boolean {
        return this.game.items.indexOf(item) >= 0;
    }

    cancel(): void {
        this.router.navigate(['/dashboard']);
    }
}
