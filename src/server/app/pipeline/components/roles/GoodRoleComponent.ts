
import { Faction, GamePlayData } from "../../../../../shared/models";
import { BaseComponent } from "../BaseComponent";

export class GoodRoleComponent extends BaseComponent {
    constructor() {
        super();
    }

    setupOath(gamePlayData: GamePlayData): GamePlayData {
        for (let player in gamePlayData.assignedRoles) {
            if (gamePlayData.assignedRoles[player].faction === Faction.Good) {
                gamePlayData.oaths[player] = [];
            }
        }

        return gamePlayData;
    }
}