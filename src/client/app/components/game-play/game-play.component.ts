
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GameLobby } from "../../models/game-lobby";
import { Player } from "../../models/player";
import { GameService } from "../../services/game.service";
import { SocketService } from "../../services/socket.service";
import { SessionInfo } from "../../session/session-info";

@Component({
    selector: 'game-play',
    templateUrl: './app/components/game-play/game-play.component.html',
    styleUrls: ['./app/components/game-play/game-play.component.css']
})

export class GamePlayComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private gameService: GameService,
        private socketService: SocketService) {
    }

    ngOnInit() {
    }
}
