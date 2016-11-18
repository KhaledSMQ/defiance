
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlayerService } from "../../services/player.service";
import { CookieService } from "angular2-cookie/core";
import { Player } from "../../models/player";
import { Router } from '@angular/router';
import { Constants } from "../../constants/constants";
import { SessionInfo } from "../../constants/session-info";

@Component({
    selector: 'player-login',
    templateUrl: './app/components/player-login/player-login.component.html',
    styleUrls: ['./app/components/player-login/player-login.component.css']
})

export class PlayerLoginComponent implements OnInit {
    @Input() loggedIn: boolean;
    @Output() loggedInChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    player: Player;
    error: any;

    constructor(
        private router: Router,
        private playerService: PlayerService,
        private cookieService: CookieService) {
        this.player = new Player();
    }

    createOrLogin() {
        if (this.player.name) {
            this.playerService.getPlayerByName(this.player.name).then(player => {
                let res: any = player;
                if (res.error) {
                    if (res.error = "no data") {
                        this.playerService.createPlayer(this.player).then(createdPlayer => this.setPlayer(createdPlayer));
                    }
                } else {
                    this.setPlayer(player);
                }
            });
        }
    }

    setPlayer(player: Player) {
        this.cookieService.put(Constants.UserIdKey, player._id);
        SessionInfo.Player = player;
        this.loggedInChange.emit(true);
    }

    ngOnInit() {
    }
}
