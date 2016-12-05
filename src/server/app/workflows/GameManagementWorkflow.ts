
import { GameBusiness } from "../../data/business/GameBusiness";
import { IGame } from "shared/models";

export class GameManagementWorkflow {
    retrieveGameById(id: string, successCallback: (result: IGame) => void, errorCallback?: (error: any) => void) {
        var gameBusiness = new GameBusiness();
        gameBusiness.findById(id, (error, result) => {
            if (error) errorCallback({ "error": "error" });
            else successCallback(result);
        });
    }

    retrieveAllGames(successCallback: (result: IGame) => void, errorCallback?: (error: any) => void) {
        var gameBusiness = new GameBusiness();
        gameBusiness.retrieve((error, result) => {
            if (error) errorCallback({ "error": "error" });
            else successCallback(result);
        });
    }

    createGame(game: IGame, successCallback: (result: IGame) => void, errorCallback?: (error: any) => void) {
        var gameBusiness = new GameBusiness();

        gameBusiness.create(game, (error, result) => {
            if (error) errorCallback({ "error": "error" });
            else successCallback(result);
        });
    }
}