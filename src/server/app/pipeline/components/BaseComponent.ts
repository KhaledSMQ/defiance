
import { IPipelineComponent } from "./IPipelineComponent";
import { IGame, GamePlayData } from "shared/models";

export class BaseComponent implements IPipelineComponent {

    setupGame(game: IGame, gamePlayData: GamePlayData) {

        return gamePlayData;
    }
}