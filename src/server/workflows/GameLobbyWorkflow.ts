
import { GameBusiness } from "../app/business/GameBusiness";
import { IGame, IPlayer } from "shared/models";

export class GameLobbyWorkflow {

    joinGameLobby(id: string, player: IPlayer, successCallback: (result: IGame, isResume?: boolean) => void, errorCallback?: (error: any) => void) {
        var gameBusiness = new GameBusiness();
        gameBusiness.findById(id, (error: any, game: IGame) => {
            if (error) errorCallback({ error: "error" });
            else {
                // check status of game to see if joinable.
                if (!game.players) {
                    errorCallback({ error: "the game has errored" });
                }
                else {

                    let index: number = game.players.indexOf(player.name);

                    if (index < 0 && game.players.length < game.numberOfPlayers) {
                        game.players.push(player.name);

                        gameBusiness.update(id, game, (error, result) => {
                            if (error) errorCallback({ "error": "error" });
                            else {
                                successCallback(game);
                            }
                        });
                    } else if (index >= 0) {
                        successCallback(game, true);
                    } else {
                        errorCallback({ error: "game is full", gameFull: true });
                    }
                }
            }
        });
    }

    leaveGameLobby(id: string, player: IPlayer, successCallback: (result: IGame) => void, errorCallback?: (error: any) => void) {
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