
import PlayerBusiness = require("../app/business/PlayerBusiness");
import IPlayerModel = require("./../app/model/interfaces/PlayerModel");

class PlayerManagementWorkflow {
    create(player: IPlayerModel, successCallback: (player: any) => void, errorCallback?: (error: any) => void) {
        var playerBusiness = new PlayerBusiness();
        playerBusiness.create(player, (error, result) => {
            if (error) errorCallback({ "error": "error" });
            else successCallback(result);
        });
    };

    findById(id: string, successCallback: (player: IPlayerModel) => void, errorCallback?: (error: any) => void) {
        var playerBusiness = new PlayerBusiness();
        playerBusiness.findById(id, (error, result) => {
            if (error) errorCallback({ "error": "error" });
            else successCallback(result);
        });
    }

    findByName(name: string, successCallback: (player: IPlayerModel) => void, errorCallback?: (error: any) => void) {
        var playerBusiness = new PlayerBusiness();
        playerBusiness.findByName(name, (error, result) => {
            if (error) errorCallback({ "error": "error" });
            else if (!result) errorCallback({ error: "no data" })
            else successCallback(result);
        });
    }
}

export = PlayerManagementWorkflow;