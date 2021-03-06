
import { Component, OnInit } from '@angular/core';
import { CookieService } from "angular2-cookie/core";
import { Player } from "shared/models";
import { PlayerService } from "./services/player.service";
import { Constants } from "./constants/constants";
import { SessionInfo } from "./session/session-info";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})

export class AppComponent implements OnInit {
    loggedIn: boolean = false;

    get sessionInfo(): SessionInfo {
        return SessionInfo;
    }

    title = 'Defiance';

    constructor(
        private playerService: PlayerService,
        private cookieService: CookieService) {
    }

    ngOnInit() {
        // check if user is logged in, if so continue and fetch games.
        let userId: string = this.getUserIdFromCookie();

        if (userId) {
            this.playerService.getPlayerById(userId).then(player => SessionInfo.Player = player).then(x => this.loggedIn = true);
        } else {
            this.loggedIn = false;
        }
    }

    private getUserIdFromCookie(): string {
        let userId: string = this.cookieService.get(Constants.UserIdKey);
        return userId;
    }
}
