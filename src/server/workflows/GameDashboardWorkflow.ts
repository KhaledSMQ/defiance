
import { GameBusiness } from "../app/business/GameBusiness";
import { ObjectWrapper } from "../app/schemas/ObjectWrapper";
import { Game } from "shared/models/game";
import { Player } from "shared/models/player";

export class GameDashboardWorkflow {
    retrieveGameById(id: string, successCallback: (result: Game) => void, errorCallback?: (error: any) => void) {
        var gameBusiness = new GameBusiness();
        gameBusiness.findById(id, (error, result) => {
            if (error) errorCallback({ "error": "error" });
            else successCallback(result.value);
        });
    }

    retrieveAllGames(successCallback: (result: Game) => void, errorCallback?: (error: any) => void) {
        var gameBusiness = new GameBusiness();
        gameBusiness.retrieve((error, result) => {
            if (error) errorCallback({ "error": "error" });
            else successCallback(result);
        });
    }

    createGame(game: Game, successCallback: (result: Game) => void, errorCallback?: (error: any) => void) {
        var gameBusiness = new GameBusiness();

        gameBusiness.create(game, (error, result) => {
            if (error) errorCallback({ "error": "error" });
            else successCallback(result);
        });
    }
}