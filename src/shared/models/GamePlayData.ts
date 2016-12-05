
import { Role } from "./Role";
import { MissionResult } from "./MissionResult";
import { TeamResult } from "./TeamResult";
import { Faction } from "./Faction";
import { Item } from "./Item";
export class GamePlayData {
    gameId: string;

    assignedRoles: { [playerId: string]: Role } = {};

    items: { [playerId: string]: Item } = {};

    missions: { [missionNumber: number]: MissionResult } = {};

    teams: { [missionNumber: number]: TeamResult[] } = {};

    winner: Faction = null;

    currentMission: number;
    
    currentTeam: number;
}
