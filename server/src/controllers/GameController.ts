
import express = require("express");
import GameBusiness = require("../app/business/GameBusiness");
import IReadController = require("./interfaces/ReadController");
import IWriteController = require("./interfaces/WriteController");
import GameModel = require("./../app/model/GameModel");
import IGameModel = require("./../app/model/interfaces/GameModel");
import IPlayerModel = require("./../app/model/interfaces/PlayerModel");
import SocketServer = require("./../sockets/SocketServer");

class GameController implements IReadController, IWriteController {
    create(req: express.Request, res: express.Response): void {
        try {
            var game: IGameModel = <IGameModel>req.body;
            var gameBusiness = new GameBusiness();

            gameBusiness.create(game, (error, result) => {
                if (error) res.send({ "error": "error" });
                else {
                    SocketServer.broadcast<IGameModel>("game created", result, "lobby");
                    res.send(result);
                }
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

    leave(req: express.Request, res: express.Response): void {
        try {
            var _id: string = req.params._id;
            var gameBusiness = new GameBusiness();

            gameBusiness.findById(_id, (error, game) => {
                if (error) res.send({ error: "error" });
                else {
                    // check status of game to see if joinable.
                    if (!game.players) {
                        res.send({ error: "the game has errored" });
                    }
                    else {
                        if (game.players.length > 0) {
                            let player: IPlayerModel = <IPlayerModel>req.body;
                            let index: number = game.players.indexOf(player.name);

                            if (index >= 0) {
                                if (player.name == game.createdBy) {
                                    console.log("game creator is leaving.");
                                }
                                game.players.splice(index, 1);

                                gameBusiness.update(_id, game, (error, result) => {
                                    if (error) res.send({ "error": "error" });
                                    else {
                                        SocketServer.broadcast<IGameModel>("game updated", game, "lobby");
                                        res.send(game);
                                    }
                                });
                            } else {
                                res.send({ error: "player was not in game", leftGame: true });
                            }
                        } else {
                            res.send({ error: "game is empty", leftGame: true });
                        }
                    }
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ error: "error in your request" });
        }
    }

    join(req: express.Request, res: express.Response): void {
        try {
            var _id: string = req.params._id;
            var gameBusiness = new GameBusiness();

            gameBusiness.findById(_id, (error: any, game: IGameModel) => {
                if (error) res.send({ error: "error" });
                else {
                    // check status of game to see if joinable.
                    if (!game.players) {
                        res.send({ error: "the game has errored" });
                    }
                    else {

                        if (game.players.length < game.numberOfPlayers) {
                            let player: IPlayerModel = <IPlayerModel>req.body;

                            let index: number = game.players.indexOf(player.name);
                            if (index < 0) {
                                game.players.push(player.name);

                                gameBusiness.update(_id, game, (error, result) => {
                                    if (error) res.send({ "error": "error" });
                                    else {
                                        SocketServer.broadcast<IGameModel>("game updated", game, "lobby");
                                        res.send(result);
                                    }
                                });
                            } else {
                                res.send({ message: "already in game" });
                            }
                        } else {
                            res.send({ error: "game is full", gameFull: true });
                        }
                    }
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ error: "error in your request" });
        }
    }
}

export = GameController;
