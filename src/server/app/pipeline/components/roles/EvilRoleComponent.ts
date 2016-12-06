
import { Roles, GameData } from "../../../../../shared/constants";
import { GamePlayData, Role, Faction } from "../../../../../shared/models";
import { BaseComponent } from "../BaseComponent";

export class EvilRoleComponent extends BaseComponent {
    constructor() {
        super();
    }

    setupOath(gamePlayData: GamePlayData): GamePlayData {
        let evilPlayers: string[] = [];
        for (let player in gamePlayData.assignedRoles) {
            let role: Role = gamePlayData.assignedRoles[player];

            if (role.faction === Faction.Evil && role.name !== Roles.Oberon.name) {
                evilPlayers.push(player);
            }
        }

        for (let evilPlayer of evilPlayers) {
            gamePlayData.oaths[evilPlayer] = evilPlayers;
        }

        return gamePlayData;
    }
}