
import { IPipelineComponent } from "./components/IPipelineComponent";
import { Game, GamePlayData } from "../../../shared/models";

export class GamePipeline {
    private components: IPipelineComponent[] = [];

    addComponent(component: IPipelineComponent) {
        this.components.push(component);
    }

    setupGame(game: Game): GamePlayData {
        let gamePlayData: GamePlayData = new GamePlayData();
        this.performOnComponents((c) => c.setupGame(game, gamePlayData));

        return gamePlayData;
    }

    analyzeGame(gamePlayData: GamePlayData) {

    }

    setupOath(gamePlayData: GamePlayData): GamePlayData {
        this.performOnComponents((c) => c.setupOath(gamePlayData));

        return gamePlayData;
    }

    processPreGame(gamePlayData: GamePlayData) {

    }

    setupRoundOne(gamePlayData: GamePlayData) {

    }

    processRoundOne(gamePlayData: GamePlayData) {

    }

    setupRoundTwo(gamePlayData: GamePlayData) {

    }

    processRoundTwo(gamePlayData: GamePlayData) {

    }

    setupRoundThree(gamePlayData: GamePlayData) {

    }

    processRoundThree(gamePlayData: GamePlayData) {

    }

    setupRoundFour(gamePlayData: GamePlayData) {

    }

    processRoundFour(gamePlayData: GamePlayData) {

    }

    setupRoundFive(gamePlayData: GamePlayData) {

    }

    processRoundFive(gamePlayData: GamePlayData) {

    }

    setupPostGame(gamePlayData: GamePlayData) {

    }

    processPostGame(gamePlayData: GamePlayData) {

    }

    private performOnComponents(action: (c: IPipelineComponent) => void) {
        for (let component of this.components) {
            action(component);
        }
    }
}