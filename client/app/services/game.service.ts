
import { Injectable } from '@angular/core';

import { RestService } from "./rest.service";

import { Game } from "../models/game";

@Injectable()
export class GameService {

    constructor(private restService: RestService) { }

    private url = 'api/games';  // URL to web api

    getGames(): Promise<Game[]> {
        return this.restService.get<Game[]>(this.url);
    }

    createGame(game: Game): Promise<Game> {
        return this.restService.post<Game>(this.url, game);
    }

    getGame(id: string): Promise<Game> {
        return this.restService.get<Game>(`${this.url}/${id}`);
    }
}
