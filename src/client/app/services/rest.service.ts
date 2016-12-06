
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestService {
    constructor(private http: Http) { }

    get<T>(url: string): Promise<T> {
        return this.http
            .get(url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    post<T, R>(url: string, data: T): Promise<R> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(url, JSON.stringify(data), { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    put<T, R>(url: string, data: T): Promise<R> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .put(url, JSON.stringify(data), { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}