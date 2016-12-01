
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GameLobby } from "../../models/game-lobby";
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
    lobby: GameLobby = null;

    playerReady: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private gameService: GameService,
        private socketService: SocketService) {
    }

    ngOnInit() {
        this.gameService.getGame(this.route.snapshot.params['id'])
            .then(game => this.lobby = new GameLobby(game));

        this.socketService.subscribe("playerJoinedGame", (data) => this.playerJoinedGame(data));
        this.socketService.subscribe("playerLeftGame", (data) => this.playerLeftGame(data));
        this.socketService.subscribe("playerChangedReadyState", (data) => this.playerChangedReadyState(data))
        this.socketService.subscribe("gameLaunchInitialized", (data) => this.gameLaunchInitialized(data));
    }


    get isGameOwner(): boolean {
        return this.lobby && this.lobby.game && this.lobby.game.createdBy === SessionInfo.Player.name;
    }

    get allPlayersReady(): boolean {
        if (!this.lobby || !this.lobby.game || !this.lobby.playerInfo || !this.playerReady) {
            return false;
        }

        let numberOfReadies: number = 1;
        for (let playerName in this.lobby.playerInfo) {
            let playerInfo = this.lobby.playerInfo[playerName];

            if (playerInfo.ready) {
                numberOfReadies++;
            }
        }

        return numberOfReadies === this.lobby.game.numberOfPlayers;
    }

    get currentPlayer(): Player {
        return SessionInfo.Player;
    }

    isCurrentPlayer(name: string): boolean {
        return SessionInfo.Player.name === name;
    }

    gotoDetail(player: Player) {
    }

    leave() {
        if (!this.playerReady) {
            this.gameService.leaveGame(this.lobby.game, SessionInfo.Player).then(leftGame => {
                let res: any = leftGame;
                if (res.error && !res.leftGame) {
                } else {
                    SessionInfo.GameActive = false;
                    this.socketService.send("leaveLobby", { game: leftGame._id, play: false });
                    this.router.navigate(['dashboard']);
                }
            });
        }
    }

    launchGame() {
        this.gameService.startGame(this.lobby.game);
        //todo: ensure the client cannot call multiple times.
    }

    gameLaunchInitialized(data: any) {
        this.socketService.send("leaveLobby", { game: this.lobby.game._id, play: true });
        this.router.navigate(['game', this.lobby.game._id, 'play']);
    }

    toggleReady() {
        this.socketService.send("playerReadyStateChange", {
            player: SessionInfo.Player.name,
            game: this.lobby.game._id,
            state: !this.playerReady
        }, (res: any) => {
            this.playerReady = res.state;
        })
    }

    playerChangedReadyState(data: any) {
        let playerInfo = this.lobby.getPlayerInfo(data.player);
        if (!playerInfo) {
            playerInfo = {};
        }
        playerInfo.ready = data.state;

        this.lobby.setPlayerInfo(data.player, playerInfo);
    }

    playerJoinedGame(data: any) {
        this.lobby.game.players.push(data.name);
    }

    playerLeftGame(data: any) {
        let playerIndex = this.lobby.game.players.indexOf(data.name);

        if (playerIndex >= 0) {
            this.lobby.game.players.splice(playerIndex, 1);
            delete this.lobby.playerInfo[data.name];
        }
    }
}
