
import express = require("express");
import PlayerBusiness = require("../app/business/PlayerBusiness");
import IReadController = require("./interfaces/ReadController");
import IWriteController = require("./interfaces/WriteController");
import IPlayerModel = require("./../app/model/interfaces/PlayerModel");

class PlayerController implements IReadController, IWriteController {
    create(req: express.Request, res: express.Response): void {
        try {
            var game: IPlayerModel = <IPlayerModel>req.body;
            var playerBusiness = new PlayerBusiness();
            playerBusiness.create(game, (error, result) => {
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
            var playerBusiness = new PlayerBusiness();
            playerBusiness.update(_id, game, (error, result) => {
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
            var playerBusiness = new PlayerBusiness();
            playerBusiness.retrieve((error, result) => {
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
            var playerBusiness = new PlayerBusiness();
            playerBusiness.findById(_id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }

    findByName(req: express.Request, res: express.Response): void {
        try {
            var name: string = req.params.name;
            var playerBusiness = new PlayerBusiness();
            playerBusiness.findByName(name, (error, result) => {
                if (error) res.send({ "error": "error" });
                else if (!result) res.send({ error: "no data" })
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
