
import * as express from "express";
import { IPlayer } from "shared/models";
import { PlayerManagementWorkflow } from "../../app/workflows";

export class PlayerManagementController {
    create(req: express.Request, res: express.Response): void {
        try {
            var game: IPlayer = <IPlayer>req.body;
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
            var id: string = req.params.id;
            let workflow = new PlayerManagementWorkflow();

            workflow.findById(id,
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