

interface SocketMiddleware {
    process(socket: any, next: (err?: any) => void): void;
}

export = SocketMiddleware;