
import * as express from "express";
import { PlayerManagementController } from "../controllers/PlayerManagementController";

var router = express.Router();
export class PlayerRoutes {
    private playerController: PlayerManagementController;

    constructor() {
        this.playerController = new PlayerManagementController();
    }

    get routes() {
        router.post("/players", this.playerController.create);
        router.get("/players/id/:id", this.playerController.findById);
        router.get("/players/name/:name", this.playerController.findByName);

        return router;
    }
}

Object.seal(PlayerRoutes);