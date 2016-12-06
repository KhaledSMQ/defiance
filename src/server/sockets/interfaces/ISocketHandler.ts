

export interface ISocketHandler {
    onRegister(io: SocketIO.Server, socket: SocketIO.Socket): void;
}