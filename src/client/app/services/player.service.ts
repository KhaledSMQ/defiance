
import { Injectable } from '@angular/core';
import { RestService } from "./rest.service";
import { Player } from "shared/models/player";

@Injectable()
export class PlayerService {

    constructor(private restService: RestService) { }

    private url = 'api/players';  // URL to web api

    getPlayers(): Promise<Player[]> {
        return this.restService.get<Player[]>(this.url);
    }

    createPlayer(player: Player): Promise<Player> {
        return this.restService.post<Player, Player>(this.url, player);
    }

    getPlayerById(id: string): Promise<Player> {
        return this.restService.get<Player>(`${this.url}/id/${id}`);
    }

    getPlayerByName(name: string): Promise<Player> {
        return this.restService.get<Player>(`${this.url}/name/${name}`);
    }
}
