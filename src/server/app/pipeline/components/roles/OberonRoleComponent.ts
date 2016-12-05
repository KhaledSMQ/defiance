
import { EvilRoleComponent } from "./EvilRoleComponent";
import { Roles, GameData } from "../../../../../shared/constants";
import { Game, GamePlayData, Role, Faction } from "../../../../../shared/models";

export class OberonRoleComponent extends EvilRoleComponent {
    constructor() {
        super();
    }

    setupGame(game: Game, gamePlayData: GamePlayData) {
        let evilGenericPlayers: string[] = [];

        for (let playerName in gamePlayData.assignedRoles) {
            let role = gamePlayData.assignedRoles[playerName];
            if (role.faction === Faction.Evil && role.name === Roles.GenericEvil.name)
                evilGenericPlayers.push(playerName);
        }

        if (evilGenericPlayers.length > 0) {
            let random: number = Math.floor(Math.random() * evilGenericPlayers.length);
            gamePlayData.assignedRoles[evilGenericPlayers[random]] = Roles.Oberon;
        }

        return gamePlayData;
    }

    setupOath(gamePlayData: GamePlayData): GamePlayData {
        let oberonPlayer: string;

        for (let player in gamePlayData.assignedRoles) {
            let role: Role = gamePlayData.assignedRoles[player];

            if (role.name === Roles.Oberon.name)
                oberonPlayer = player;
        }

        gamePlayData.oaths[oberonPlayer] = [];

        return gamePlayData;
    }
}