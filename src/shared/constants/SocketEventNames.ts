
export class SocketEventNames {
    static Client: ClientSocketEventNames = new ClientSocketEventNames();
    static Server: ServerSocketEventNames = new ServerSocketEventNames();
}

class SharedSocketEventNames {
}

export class ClientSocketEventNames extends SharedSocketEventNames {
    joinLobby: string = "joinLobby";
    leaveLobby: string = "leaveLobby";
    joinGame: string = "joinGame";
    leaveGame: string = "leaveGame";
    playVote: string = "playVote";
    playerReadyStateChange: string = "playerReadyStateChange";
}

export class ServerSocketEventNames extends SharedSocketEventNames {
    gameCreated: string = "gameCreated";
    gameUpdated: string = "gameUpdated";
    playerJoinedGame: string = "playerJoinedGame";
    playerLeftGame: string = "playerLeftGame";
    playerChangedReadyState: string = "playerChangedReadyState";
    gameLaunchInitialized: string = "gameLaunchInitialized";
    playerVotePlayed: string = "playerVotePlayed";
}

Object.seal(ClientSocketEventNames);
Object.seal(ServerSocketEventNames);
Object.seal(SocketEventNames);