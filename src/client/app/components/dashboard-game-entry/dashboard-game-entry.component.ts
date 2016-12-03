
import { Component, OnInit, Input } from '@angular/core';
import { GameService } from "../../services/game.service";
import { Game } from "shared/models/game";
import { Router } from '@angular/router';

@Component({
    selector: 'dashboard-game-entry',
    templateUrl: './app/components/dashboard-game-entry/dashboard-game-entry.component.html',
    styleUrls: ['./app/components/dashboard-game-entry/dashboard-game-entry.component.css']
})

export class DashboardGameEntryComponent implements OnInit {
    @Input()
    game: Game;

    error: any;

    constructor(
        private router: Router,
        private gameService: GameService) { }

    ngOnInit() {
    }
}
