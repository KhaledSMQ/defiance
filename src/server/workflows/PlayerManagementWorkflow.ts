
import { PlayerBusiness } from "../app/business/PlayerBusiness";
import { IPlayer } from "shared/models";

export class PlayerManagementWorkflow {
    create(player: IPlayer, successCallback: (player: any) => void, errorCallback?: (error: any) => void) {
        var playerBusiness = new PlayerBusiness();
        playerBusiness.create(player, (error, result) => {
            if (error) errorCallback({ "error": "error" });
            else successCallback(result);
        });
    };

    findById(id: string, successCallback: (player: IPlayer) => void, errorCallback?: (error: any) => void) {
        var playerBusiness = new PlayerBusiness();
        playerBusiness.findById(id, (error, result) => {
            if (error) errorCallback({ "error": "error" });
            else successCallback(result);
        });
    }

    findByName(name: string, successCallback: (player: IPlayer) => void, errorCallback?: (error: any) => void) {
        var playerBusiness = new PlayerBusiness();
        playerBusiness.findByName(name, (error, result) => {
            if (error) errorCallback({ "error": "error" });
            else if (!result) errorCallback({ error: "no data" })
            else successCallback(result);
        });
    }
}