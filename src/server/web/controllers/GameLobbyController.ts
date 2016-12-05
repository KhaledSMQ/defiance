
import * as express from "express";
import { Game, IGame, IPlayer } from "../../../shared/models";
import { GameManagementWorkflow, GameLobbyWorkflow, GamePlayWorkflow } from "../../app/workflows";
import { SocketEventNames } from "../../../shared/constants"
import { SocketServer } from "../../sockets/SocketServer";

export class GameLobbyController {
    leaveGameLobby(req: express.Request, res: express.Response): void {
        try {
            let id: string = req.params.id;
            let player: IPlayer = <IPlayer>req.body;
            let workflow = new GameLobbyWorkflow();

            workflow.leaveGameLobby(id, player,
                (result) => {
                    SocketServer.broadcast<IGame>(SocketEventNames.Server.gameUpdated, result, "dashboardLobby");
                    SocketServer.io.to(`gameLobby#${id}`).emit(SocketEventNames.Server.playerLeftGame, { name: player.name });
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

    joinGameLobby(req: express.Request, res: express.Response): void {
        try {
            let id: string = req.params.id;
            let player: IPlayer = <IPlayer>req.body;
            let workflow = new GameLobbyWorkflow();

            workflow.joinGameLobby(id, player,
                (result, resume) => {
                    SocketServer.broadcast<IGame>(SocketEventNames.Server.gameUpdated, result, "dashboardLobby");
                    if (!resume)
                        SocketServer.io.to(`gameLobby#${id}`).emit(SocketEventNames.Server.playerJoinedGame, { name: player.name });

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

    startGame(req: express.Request, res: express.Response): void {
        try {
            let id: string = req.params.id;

            SocketServer.io.to(`gameLobby#${id}`).emit(SocketEventNames.Server.gameLaunchInitialized, {});

            let managementWorkflow = new GameManagementWorkflow();

            managementWorkflow.retrieveGameById(id, (result: IGame) => {
                let workflow = new GamePlayWorkflow();

                workflow.generateGamePlayData(<Game>result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ error: "error in your request" });
        }
    }
}