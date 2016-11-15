
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
        router.put("/games/:_id", controller.update);
        router.get("/games/:_id", controller.findById);
        router.delete("/games/:_id", controller.delete);

        return router;
    }
}

Object.seal(GameRoutes);
export = GameRoutes;
