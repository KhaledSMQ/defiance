
import ISocketHandler = require("./interfaces/SocketHandler");
import DashboardHandler = require("./handlers/DashboardHandler");
import GameLobbyHandler = require("./handlers/GameLobbyHandler");

class HandlerRegistrar {
    dashboardHandler: DashboardHandler;
    gameLobbyHandler : GameLobbyHandler;

    constructor() {
        this.dashboardHandler = new DashboardHandler();
        this.gameLobbyHandler = new GameLobbyHandler();
    }

    get Handlers(): ISocketHandler[] {
        return [
            this.dashboardHandler,
            this.gameLobbyHandler
        ];
    }

}

Object.seal(HandlerRegistrar);
export = HandlerRegistrar;