
import GameBusiness = require("../app/business/GameBusiness");
import IGameModel = require("./../app/model/interfaces/GameModel");
import IPlayerModel = require("./../app/model/interfaces/PlayerModel");

class GameManagementWorkflow {
    retrieveGameById(id: string, successCallback: (result: IGameModel) => void, errorCallback?: (error: any) => void) {
        var gameBusiness = new GameBusiness();
        gameBusiness.findById(id, (error, result) => {
            if (error) errorCallback({ "error": "error" });
            else successCallback(result);
        });
    }

    retrieveAllGames(successCallback: (result: IGameModel) => void, errorCallback?: (error: any) => void) {
        var gameBusiness = new GameBusiness();
        gameBusiness.retrieve((error, result) => {
            if (error) errorCallback({ "error": "error" });
            else successCallback(result);
        });
    }

    createGame(game: IGameModel, successCallback: (result: IGameModel) => void, errorCallback?: (error: any) => void) {
        var gameBusiness = new GameBusiness();

        gameBusiness.create(game, (error, result) => {
            if (error) errorCallback({ "error": "error" });
            else successCallback(result);
        });
    }

    joinGame(id: string, player: IPlayerModel, successCallback: (result: IGameModel) => void, errorCallback?: (error: any) => void) {
        var gameBusiness = new GameBusiness();
        gameBusiness.findById(id, (error: any, game: IGameModel) => {
            if (error) errorCallback({ error: "error" });
            else {
                // check status of game to see if joinable.
                if (!game.players) {
                    errorCallback({ error: "the game has errored" });
                }
                else {

                    if (game.players.length < game.numberOfPlayers) {
                        let index: number = game.players.indexOf(player.name);
                        if (index < 0) {
                            game.players.push(player.name);

                            gameBusiness.update(id, game, (error, result) => {
                                if (error) errorCallback({ "error": "error" });
                                else {
                                    successCallback(game);
                                }
                            });
                        } else {
                            errorCallback({ error: "already in game" });
                        }
                    } else {
                        errorCallback({ error: "game is full", gameFull: true });
                    }
                }
            }
        });
    }

    leaveGame(id: string, player: IPlayerModel, successCallback: (result: IGameModel) => void, errorCallback?: (error: any) => void) {
        var gameBusiness = new GameBusiness();

        gameBusiness.findById(id, (error, game) => {
            if (error) errorCallback({ error: "error" });
            else {
                // check status of game to see if joinable.
                if (!game.players) {
                    errorCallback({ error: "the game has errored" });
                }
                else {
                    if (game.players.length > 0) {
                        let index: number = game.players.indexOf(player.name);

                        if (index >= 0) {
                            if (player.name == game.createdBy) {
                                console.log("game creator is leaving.");
                            }
                            game.players.splice(index, 1);

                            gameBusiness.update(id, game, (error, result) => {
                                if (error) errorCallback({ "error": "error" });
                                else {
                                    successCallback(game);
                                }
                            });
                        } else {
                            errorCallback({ error: "player was not in game", leftGame: true });
                        }
                    } else {
                        errorCallback({ error: "game is empty", leftGame: true });
                    }
                }
            }
        });
    }
}

export = GameManagementWorkflow;