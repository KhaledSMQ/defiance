
import { IPipelineComponent } from "./IPipelineComponent";
import { Game, GamePlayData } from "shared/models";

export class BaseComponent implements IPipelineComponent {

    setupGame(game: Game, gamePlayData: GamePlayData) {

        return gamePlayData;
    }
}