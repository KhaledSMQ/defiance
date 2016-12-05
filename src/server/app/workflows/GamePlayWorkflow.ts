
import { GamePipeline } from "../pipeline/GamePipeline";
import { GamePlayDataCacheService } from "../services/GamePlayDataCacheService";
import { IGame, GamePlayData } from "shared/models";


export class GamePlayWorkflow {

    setupPipeline(game: IGame): GamePipeline {
        let pipeline: GamePipeline = new GamePipeline();


        return pipeline;
    }

}