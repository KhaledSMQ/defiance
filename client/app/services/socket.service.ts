
import { Injectable } from "@angular/core";

import { Constants } from "../constants/constants";
import "socket.io-client";

@Injectable()
export class SocketService {
    private static _socket: any;

    constructor() {
        if (!SocketService._socket) {
            SocketService._socket = io();
        }
    }

    get Socket(): any {
        return SocketService._socket;
    }

    subscribe<T>(id: string, handler: (data: T) => void): void {
        this.Socket.on(id, handler);
    }

    send<T>(id: string, data: T, callback?: any): void {
        this.Socket.emit(id, data, callback);
    }
}