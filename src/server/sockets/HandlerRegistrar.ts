
import { ISocketHandler } from "./interfaces/ISocketHandler";
import { DashboardHandler } from "./handlers/DashboardHandler";
import { GameLobbyHandler } from "./handlers/GameLobbyHandler";
import { GamePlayHandler } from "./handlers/GamePlayHandler";

export class HandlerRegistrar {
    dashboardHandler: DashboardHandler;
    gameLobbyHandler: GameLobbyHandler;
    gamePlayHandler: GamePlayHandler;

    constructor() {
        this.dashboardHandler = new DashboardHandler();
        this.gamePlayHandler = new GamePlayHandler();
        this.gameLobbyHandler = new GameLobbyHandler();
    }

    get Handlers(): ISocketHandler[] {
        return [
            this.dashboardHandler,
            this.gameLobbyHandler,
            this.gamePlayHandler
        ];
    }

}

Object.seal(HandlerRegistrar);