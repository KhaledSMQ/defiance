

export interface ISocketMiddleware {
    process(socket: SocketIO.Socket, next: (err?: any) => void): void;
}