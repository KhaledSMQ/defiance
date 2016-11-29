
import ISocketHandler = require("./interfaces/SocketHandler");
import LobbyHandler = require("./handlers/LobbyHandler");

class HandlerRegistrar {
    lobbyHandler: LobbyHandler;

    constructor() {
        this.lobbyHandler = new LobbyHandler();
    }

    get Handlers(): ISocketHandler[] {
        return [
            this.lobbyHandler
        ];
    }

}

Object.seal(HandlerRegistrar);
export = HandlerRegistrar;