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

    subscribe<T>(id: string, handler: (data: T, socket?: SocketIOClient.Socket) => void): void {
        this.Socket.on(id, (data) => {
            handler(data, this.Socket);
        });
    }

    send<T, U>(id: string, data: T, callback?: (data: U) => void): void {
        if (callback) {
            this.Socket.emit(id, data, callback);
        } else {
            this.Socket.emit(id, data);
        }
    }
}