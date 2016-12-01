
import express = require("express");
import IPlayerModel = require("./../app/model/interfaces/PlayerModel");
import PlayerBusiness = require("../app/business/PlayerBusiness");
import PlayerManagementWorkflow = require("../workflows/PlayerManagementWorkflow");

class PlayerController {
    create(req: express.Request, res: express.Response): void {
        try {
            var game: IPlayerModel = <IPlayerModel>req.body;
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

export = PlayerController;
