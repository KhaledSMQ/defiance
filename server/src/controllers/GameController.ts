
import express = require("express");
import GameBusiness = require("../app/business/GameBusiness");
import IBaseController = require("./interfaces/BaseController");
import IGameModel = require("./../app/model/interfaces/GameModel");

class GameController implements IBaseController<GameBusiness> {
    create(req: express.Request, res: express.Response): void {
        try {
            var game: IGameModel = <IGameModel>req.body;
            var gameBusiness = new GameBusiness();
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
            var game: IGameModel = <IGameModel>req.body;
            var _id: string = req.params._id;
            var gameBusiness = new GameBusiness();
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

    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var gameBusiness = new GameBusiness();
            gameBusiness.delete(_id, (error, result) => {
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

            var gameBusiness = new GameBusiness();
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
            var gameBusiness = new GameBusiness();
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

export = GameController;
