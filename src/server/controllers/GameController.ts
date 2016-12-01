
import express = require("express");
import GameManagementWorkflow = require("../workflows/GameManagementWorkflow");
import IGameModel = require("./../app/model/interfaces/GameModel");
import IPlayerModel = require("./../app/model/interfaces/PlayerModel");
import SocketServer = require("./../sockets/SocketServer");

class GameController {
    create(req: express.Request, res: express.Response): void {
        try {
            let game: IGameModel = <IGameModel>req.body;
            let workflow = new GameManagementWorkflow();

            workflow.createGame(game,
                (result) => {
                    SocketServer.broadcast<IGameModel>("gameCreated", result, "lobby");
                    res.send(result);
                }, (error) => {
                    res.send(error);
                });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }

    retrieve(req: express.Request, res: express.Response): void {
        try {
            let workflow = new GameManagementWorkflow();

            workflow.retrieveAllGames(
                (result) => {
                    res.send(result);
                }, (error) => {
                    res.send(error);
                });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }

    findById(req: express.Request, res: express.Response): void {
        try {
            let id: string = req.params._id;
            let workflow = new GameManagementWorkflow();

            workflow.retrieveGameById(id,
                (result) => {
                    res.send(result)
                },
                (error) => {
                    res.send(error);
                });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }

    leave(req: express.Request, res: express.Response): void {
        try {
            let id: string = req.params._id;
            let player: IPlayerModel = <IPlayerModel>req.body;
            let workflow = new GameManagementWorkflow();

            workflow.leaveGame(id, player,
                (result) => {
                    SocketServer.broadcast<IGameModel>("gameUpdated", result, "dashboardLobby");
                    SocketServer.io.to(`gameLobby#${id}`).emit("playerLeftGame", { name: player.name });
                    res.send(result);
                },
                (error) => {
                    res.send(error);
                });
        }
        catch (e) {
            console.log(e);
            res.send({ error: "error in your request" });
        }
    }

    join(req: express.Request, res: express.Response): void {
        try {
            let id: string = req.params._id;
            let player: IPlayerModel = <IPlayerModel>req.body;
            let workflow = new GameManagementWorkflow();

            workflow.joinGame(id, player,
                (result, resume) => {
                    SocketServer.broadcast<IGameModel>("gameUpdated", result, "dashboardLobby");
                    if (!resume)
                        SocketServer.io.to(`gameLobby#${id}`).emit("playerJoinedGame", { name: player.name });

                    res.send(result);
                },
                (error) => {
                    res.send(error);
                });
        }
        catch (e) {
            console.log(e);
            res.send({ error: "error in your request" });
        }
    }

    start(req: express.Request, res: express.Response): void {
        try {
            let id: string = req.params._id;

            SocketServer.io.to(`gameLobby#${id}`).emit("gameLaunchInitialized", {});
        }
        catch (e) {
            console.log(e);
            res.send({ error: "error in your request" });
        }
    }
}

export = GameController;
