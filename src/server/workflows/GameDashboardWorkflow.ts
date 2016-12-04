
import { GameBusiness } from "../app/business/GameBusiness";
import { GameModel } from "../app/models/GameModel";

export class GameDashboardWorkflow {
    retrieveGameById(id: string, successCallback: (result: GameModel) => void, errorCallback?: (error: any) => void) {
        var gameBusiness = new GameBusiness();
        gameBusiness.findById(id, (error, result) => {
            if (error) errorCallback({ "error": "error" });
            else successCallback(result);
        });
    }

    retrieveAllGames(successCallback: (result: GameModel) => void, errorCallback?: (error: any) => void) {
        var gameBusiness = new GameBusiness();
        gameBusiness.retrieve((error, result) => {
            if (error) errorCallback({ "error": "error" });
            else successCallback(result);
        });
    }

    createGame(game: GameModel, successCallback: (result: GameModel) => void, errorCallback?: (error: any) => void) {
        var gameBusiness = new GameBusiness();

        gameBusiness.create(game, (error, result) => {
            if (error) errorCallback({ "error": "error" });
            else successCallback(result);
        });
    }
}