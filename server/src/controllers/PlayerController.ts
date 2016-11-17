
import express = require("express");
import PlayerBusiness = require("../app/business/PlayerBusiness");
import IReadController = require("./interfaces/ReadController");
import IWriteController = require("./interfaces/WriteController");
import IPlayerModel = require("./../app/model/interfaces/PlayerModel");

class PlayerController implements IReadController, IWriteController {
    create(req: express.Request, res: express.Response): void {
        try {
            var game: IPlayerModel = <IPlayerModel>req.body;
            var gameBusiness = new PlayerBusiness();
            gameBusiness.create(game, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }

    update(req: express.Request, res: express.Response): void {
        try {
            var game: IPlayerModel = <IPlayerModel>req.body;
            var _id: string = req.params._id;
            var gameBusiness = new PlayerBusiness();
            gameBusiness.update(_id, game, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }

    retrieve(req: express.Request, res: express.Response): void {
        try {

            var gameBusiness = new PlayerBusiness();
            gameBusiness.retrieve((error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }

    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var gameBusiness = new PlayerBusiness();
            gameBusiness.findById(_id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
}

export = PlayerController;
