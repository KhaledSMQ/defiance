
import { Game, GamePlayData } from "shared/models";

export interface IPipelineComponent {
    setupGame(game: Game, gamePlayData: GamePlayData): GamePlayData;

    setupOath(gamePlayData: GamePlayData): GamePlayData;
}