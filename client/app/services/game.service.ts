
import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Game } from "../models/game";

@Injectable()
export class GameService {

    private url = 'api/games';  // URL to web api

    constructor(private http: Http) { }

    getGames(): Promise<Game[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getGame(id: string) {
        return this.http.get(this.url + '/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private post(game: Game): Promise<Game> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.url, JSON.stringify(game), { headers: headers })
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private put(game: Game) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.url}/${game._id}`;

        return this.http
            .put(url, JSON.stringify(game), { headers: headers })
            .toPromise()
            .then(() => game)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
