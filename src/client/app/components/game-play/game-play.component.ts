
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Game } from "shared/models/game";
import { GamePlayData } from "shared/models/game-play-data";
import { GameService } from "../../services/game.service";
import { SocketService } from "../../services/socket.service";
import { SessionInfo } from "../../session/session-info";

@Component({
    selector: 'game-play',
    templateUrl: './app/components/game-play/game-play.component.html',
    styleUrls: ['./app/components/game-play/game-play.component.css']
})

export class GamePlayComponent implements OnInit {

    game: Game;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private gameService: GameService,
        private socketService: SocketService) {
    }

    ngOnInit() {
        this.gameService.getGame(this.route.snapshot.params['id'])
            .then(game => {
                this.game = game;
                //this.playData = new GamePlayData(game);
                this.socketService.send("joinGame", { game: game._id });
            });
    }
}
