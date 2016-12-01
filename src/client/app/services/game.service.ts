
import { Injectable } from '@angular/core';

import { RestService } from "./rest.service";

import { Game } from "../models/game";
import { Player } from "../models/player";

@Injectable()
export class GameService {

    constructor(private restService: RestService) { }

    private url = 'api/games';  // URL to web api

    getGames(): Promise<Game[]> {
        return this.restService.get<Game[]>(this.url);
    }

    startGame(game: Game): Promise<Game> {
        return this.restService.get<Game>(`${this.url}/${game._id}/start`);
    }

    joinGame(game: Game, player: Player): Promise<Game> {
        return this.restService.put<Player, Game>(`${this.url}/${game._id}/join`, player);
    }

    leaveGame(game: Game, player: Player): Promise<Game> {
        return this.restService.put<Player, Game>(`${this.url}/${game._id}/leave`, player);
    }

    createGame(game: Game): Promise<Game> {
        return this.restService.post<Game, Game>(this.url, game);
    }

    getGame(id: string): Promise<Game> {
        return this.restService.get<Game>(`${this.url}/${id}`);
    }
}
