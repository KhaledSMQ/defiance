
import * as express from "express";
import { GameDashboardWorkflow } from "../workflows/GameDashboardWorkflow";
import { IGame } from "shared/models/IGame";
import { SocketServer } from "./../sockets/SocketServer";

export class GameDashboardController {
    create(req: express.Request, res: express.Response): void {
        try {
            let game: IGame = <IGame>req.body;
            let workflow = new GameDashboardWorkflow();

            workflow.createGame(game,
                (result) => {
                    SocketServer.broadcast<IGame>("gameCreated", result, "dashboardLobby");
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
            let id: string = req.params.id;
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