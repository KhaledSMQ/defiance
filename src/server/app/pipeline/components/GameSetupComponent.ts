
import { BaseComponent } from "./BaseComponent";
import { Game, GamePlayData } from "../../../../shared/models";

export class GameSetupComponent extends BaseComponent {

    setupGame(game: Game, gamePlayData: GamePlayData) {
        let players: string[] = game.players.copy();

        while (players.length > 0) {
            let random: number = Math.floor(Math.random() * players.length);

            let player: string = players[random];
            players.splice(random, 1);

            gamePlayData.playerTurnOrder.push(player);
        }

        return gamePlayData;
    }

}