
import { GamePipeline } from "../pipeline/GamePipeline";
import { TeamAssignmentComponent } from "../pipeline/components";
import { GamePlayDataCacheService } from "../services/GamePlayDataCacheService";
import { IGame, GamePlayData } from "shared/models";


export class GamePlayWorkflow {
    private gamePlayDataCacheService: GamePlayDataCacheService;

    constructor() {
        this.gamePlayDataCacheService = new GamePlayDataCacheService();
    }

    setupPipeline(game: IGame): GamePipeline {
        let pipeline: GamePipeline = new GamePipeline();

        pipeline.addComponent(new TeamAssignmentComponent(game.numberOfPlayers));

        return pipeline;
    }

    generateGamePlayData(game: IGame): GamePlayData {
        let pipeline = this.setupPipeline(game);
        let gamePlayData = pipeline.setupGame(game);

        this.gamePlayDataCacheService.set(<string>game._id, gamePlayData);

        return gamePlayData;
    }

}