
import * as express from "express";
import { GameLobbyWorkflow } from "../workflows/GameLobbyWorkflow";
import { Game } from "shared/models/game";
import { Player } from "shared/models/player";
import { SocketServer } from "./../sockets/SocketServer";

export class GameLobbyController {
    leaveGameLobby(req: express.Request, res: express.Response): void {
        try {
            let id: string = req.params._id;
            let player: Player = <Player>req.body;
            let workflow = new GameLobbyWorkflow();

            workflow.leaveGameLobby(id, player,
                (result) => {
                    SocketServer.broadcast<Game>("gameUpdated", result, "dashboardLobby");
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

    joinGameLobby(req: express.Request, res: express.Response): void {
        try {
            let id: string = req.params._id;
            let player: Player = <Player>req.body;
            let workflow = new GameLobbyWorkflow();

            workflow.joinGameLobby(id, player,
                (result, resume) => {
                    SocketServer.broadcast<Game>("gameUpdated", result, "dashboardLobby");
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

    startGame(req: express.Request, res: express.Response): void {
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