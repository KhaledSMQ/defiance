
export class SocketEventNames {
    static Client: ClientSocketEventNames = new ClientSocketEventNames();
    static Server: ServerSocketEventNames = new ServerSocketEventNames();
}

export class SharedSocketEventNames {
    gameCreated: string = "gameCreated";
     gameUpdated: string = "gameUpdated";
}

export class ClientSocketEventNames extends SharedSocketEventNames {
    joinLobby: string = "joinLobby";
    joinGame: string = "joinGame";
    playerReadyStateChange: string = "playerReadyStateChange";
}

export class ServerSocketEventNames extends SharedSocketEventNames {
    playerJoinedGame: string = "playerJoinedGame";
    playerLeftGame: string = "playerLeftGame";
    playerChangedReadyState: string = "playerChangedReadyState";
    gameLaunchInitialized: string = "gameLaunchInitialized";
}

Object.seal(ClientSocketEventNames);
Object.seal(ServerSocketEventNames);
Object.seal(SocketEventNames);