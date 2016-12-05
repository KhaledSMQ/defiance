
import { GamePipeline } from "../pipeline/GamePipeline";
import {
    GoodRoleComponent, EvilRoleComponent,
    GameSetupComponent, TeamAssignmentComponent, MerlinRoleComponent, MordredRoleComponent,
    AssassinRoleComponent, MorganaRoleComponent, OberonRoleComponent, PercivalRoleComponent
} from "../pipeline/components";
import { GamePlayDataCacheService } from "../services/GamePlayDataCacheService";
import { Game, GamePlayData } from "shared/models";
import { Roles } from "../../../shared/constants";

import "../../../shared/extensions/ArrayExtensions";

export class GamePlayWorkflow {
    private gamePlayDataCacheService: GamePlayDataCacheService;

    constructor() {
        this.gamePlayDataCacheService = new GamePlayDataCacheService();
    }

    setupPipeline(game: Game): GamePipeline {
        let pipeline: GamePipeline = new GamePipeline();

        pipeline.addComponent(new GameSetupComponent());
        pipeline.addComponent(new TeamAssignmentComponent(game.numberOfPlayers));

        pipeline.addComponent(new GoodRoleComponent());
        pipeline.addComponent(new EvilRoleComponent());

        if (game.roles.contains(Roles.Merlin.name))
            pipeline.addComponent(new MerlinRoleComponent());
        if (game.roles.contains(Roles.Assassin.name))
            pipeline.addComponent(new AssassinRoleComponent());
        if (game.roles.contains(Roles.Mordred.name))
            pipeline.addComponent(new MordredRoleComponent());
        if (game.roles.contains(Roles.Morgana.name) && game.roles.contains(Roles.Percival.name)) {
            pipeline.addComponent(new MorganaRoleComponent());
            pipeline.addComponent(new PercivalRoleComponent());
        }

        if (game.roles.contains(Roles.Oberon.name))
            pipeline.addComponent(new OberonRoleComponent());

        return pipeline;
    }

    generateGamePlayData(game: Game): GamePlayData {
        let pipeline = this.setupPipeline(game);
        let gamePlayData = pipeline.setupGame(game);

        this.gamePlayDataCacheService.set(<string>game._id, gamePlayData);
        console.log(gamePlayData);

        return gamePlayData;
    }

    generateOathData(game: Game): GamePlayData {
        let gamePlayData: GamePlayData = this.gamePlayDataCacheService.get(<string>game._id);
        let pipeline = this.setupPipeline(game);
        gamePlayData = pipeline.setupOath(gamePlayData);

        console.log(gamePlayData);

        return gamePlayData;
    }
}