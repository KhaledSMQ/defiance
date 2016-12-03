
import * as express from "express";
import { Player } from "shared/models/player";
import { PlayerBusiness } from "../app/business/PlayerBusiness";
import { PlayerManagementWorkflow } from "../workflows/PlayerManagementWorkflow";

export class PlayerManagementController {
    create(req: express.Request, res: express.Response): void {
        try {
            var game: Player = <Player>req.body;
            let workflow = new PlayerManagementWorkflow();

            workflow.create(game,
                (result) => {
                    res.send(result);
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

    findById(req: express.Request, res: express.Response): void {
        try {
            var _id: string = req.params._id;
            let workflow = new PlayerManagementWorkflow();

            workflow.findById(_id,
                (result) => {
                    res.send(result);
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

    findByName(req: express.Request, res: express.Response): void {
        try {
            var name: string = req.params.name;
            let workflow = new PlayerManagementWorkflow();

            workflow.findByName(name,
                (result) => {
                    res.send(result);
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