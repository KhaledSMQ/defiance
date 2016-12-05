
import { GamePipeline } from "../pipeline/GamePipeline";
import { TeamAssignmentComponent } from "../pipeline/components";
import { GamePlayDataCacheService } from "../services/GamePlayDataCacheService";
import { Game, GamePlayData } from "shared/models";


export class GamePlayWorkflow {
    private gamePlayDataCacheService: GamePlayDataCacheService;

    constructor() {
        this.gamePlayDataCacheService = new GamePlayDataCacheService();
    }

    setupPipeline(game: Game): GamePipeline {
        let pipeline: GamePipeline = new GamePipeline();

        pipeline.addComponent(new TeamAssignmentComponent(game.numberOfPlayers));



        return pipeline;
    }

    generateGamePlayData(game: Game): GamePlayData {
        let pipeline = this.setupPipeline(game);
        let gamePlayData = pipeline.setupGame(game);

        this.gamePlayDataCacheService.set(<string>game._id, gamePlayData);

        return gamePlayData;
    }

}