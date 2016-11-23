

interface SocketHandler {
    onRegister(io: SocketIO.Server, socket: SocketIO.Socket): void;
}

export = SocketHandler;