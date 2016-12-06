
import * as express from "express";
import { GameDashboardController } from "../controllers/GameDashboardController";
import { GameLobbyController } from "../controllers/GameLobbyController";

var router = express.Router();
export class GameRoutes {
    private gameDashboardController: GameDashboardController;
    private gameLobbyController: GameLobbyController;

    constructor() {
        this.gameDashboardController = new GameDashboardController();
        this.gameLobbyController = new GameLobbyController();
    }

    get routes() {
        router.get("/games", this.gameDashboardController.retrieve);
        router.post("/games", this.gameDashboardController.create);
        router.get("/games/:id", this.gameDashboardController.findById);

        router.put("/games/:id/join", this.gameLobbyController.joinGameLobby);
        router.put("/games/:id/leave", this.gameLobbyController.leaveGameLobby);
        router.get('/games/:id/start', this.gameLobbyController.startGame);
        return router;
    }
}

Object.seal(GameRoutes);