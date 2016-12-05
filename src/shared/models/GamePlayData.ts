
import { Role } from "./Role";

export class GamePlayData {
    gameId: string;

    assignedRoles: { [playerId: string]: Role } = {};
}
