
import express = require("express");
import PlayerController = require("../../controllers/PlayerController");

var router = express.Router();
class PlayerRoutes {
    private _gameController: PlayerController;

    constructor() {
        this._gameController = new PlayerController();
    }

    get routes() {
        var controller = this._gameController;

        router.post("/players", controller.create);
        router.get("/players/:_id", controller.findById);

        return router;
    }
}

Object.seal(PlayerRoutes);
export = PlayerRoutes;
