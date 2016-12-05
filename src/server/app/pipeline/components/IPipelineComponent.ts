
import { IGame, GamePlayData } from "shared/models";

export interface IPipelineComponent {
    setupGame(game: IGame, gamePlayData: GamePlayData): GamePlayData;
}