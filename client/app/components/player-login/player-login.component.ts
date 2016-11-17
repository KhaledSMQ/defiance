
import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from "../../services/player.service";
import { Player } from "../../models/player";
import { Router } from '@angular/router';

@Component({
    selector: 'player-login',
    templateUrl: './app/components/player-login/player-login.component.html',
    styleUrls: ['./app/components/player-login/player-login.component.css']
})

export class PlayerLoginComponent implements OnInit {
    player: Player;

    error: any;

    constructor(
        private router: Router,
        private playerService: PlayerService) {
        this.player = new Player();
    }

    ngOnInit() {
    }
}
