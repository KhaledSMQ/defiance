

interface SocketMiddleware {
    process(socket: SocketIO.Socket, next: (err?: any) => void): void;
}

export = SocketMiddleware;