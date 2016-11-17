
import express = require("express");
import GameController = require("../../controllers/GameController");

var router = express.Router();
class GameRoutes {
    private _gameController: GameController;

    constructor () {
        this._gameController = new GameController();
    }
    
    get routes () {
        var controller = this._gameController;

        router.get("/games", controller.retrieve);
        router.post("/games", controller.create);
        router.get("/games/:_id", controller.findById);

        return router;
    }
}

Object.seal(GameRoutes);
export = GameRoutes;
