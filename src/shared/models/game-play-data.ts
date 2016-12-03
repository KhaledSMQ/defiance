
import { Role } from "./role";

export class GamePlayData {
    gameId: string;

    assignedRoles: { [playerId: string]: Role } = {};
}
