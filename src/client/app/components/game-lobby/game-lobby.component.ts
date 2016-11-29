
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Game } from "../../models/game";
import { Player } from "../../models/player";
import { GameService } from "../../services/game.service";
import { SocketService } from "../../services/socket.service";
import { SessionInfo } from "../../session/session-info";

@Component({
    selector: 'game-lobby',
    templateUrl: './app/components/game-lobby/game-lobby.component.html',
    styleUrls: ['./app/components/game-lobby/game-lobby.component.css']
})

export class GameLobbyComponent implements OnInit {
    game: Game = null;

    playerReady: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private gameService: GameService,
        private socketService: SocketService) {
    }

    ngOnInit() {
        this.gameService.getGame(this.route.snapshot.params['id'])
            .then(game => this.game = game);
    }

    leave() {
        this.gameService.leaveGame(this.game, SessionInfo.Player).then(leftGame => {
            let res: any = leftGame;
            if (res.error && !res.leftGame) {
            } else {
                SessionInfo.GameActive = false;
                this.router.navigate(['dashboard']);
            }
        });
    }

    toggleReady() {
        this.socketService.send("playerReadyStateChange", {
            player: SessionInfo.Player.name
         })
    }

    isGameOwner(): boolean {
        return this.game.createdBy === SessionInfo.Player.name;
    }

    gotoDetail(player: Player) {
    }
}
