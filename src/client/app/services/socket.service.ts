/// <reference path="./../../typings/globals/socket.io-client/index.d.ts" />

import { Injectable } from "@angular/core";
import { Constants } from "../constants/constants";

import * as io from "socket.io-client";

@Injectable()
export class SocketService {
    private static _socket: SocketIOClient.Socket;

    constructor() {
        if (!SocketService._socket) {
            SocketService._socket = io();
        }
    }

    get Socket(): SocketIOClient.Socket {
        return SocketService._socket;
    }

    subscribe<T>(id: string, handler: (data: T) => void): void {
        this.Socket.on(id, handler);
    }

    send<T>(id: string, data: T, callback?: any): void {
        this.Socket.emit(id, data, callback);
    }
}