
import * as express from "express";
import { GameDashboardWorkflow } from "../workflows/GameDashboardWorkflow";
import { Game } from "shared/models/game";
import { Player } from "shared/models/player";
import { SocketServer } from "./../sockets/SocketServer";

export class GameDashboardController {
    create(req: express.Request, res: express.Response): void {
        try {
            let game: Game = <Game>req.body;
            let workflow = new GameDashboardWorkflow();

            workflow.createGame(game,
                (result) => {
                    SocketServer.broadcast<Game>("gameCreated", result, "dashboardLobby");
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
            let workflow = new GameDashboardWorkflow();

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
            let workflow = new GameDashboardWorkflow();

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
}