
import { Role } from "./Role";
import { MissionResult } from "./MissionResult";
import { TeamResult } from "./TeamResult";
import { Faction } from "./Faction";

export class GamePlayData {
    gameId: string;

    assignedRoles: { [playerId: string]: Role } = {};

    missions: { [missionNumber: number]: MissionResult } = {};

    teams: { [missionNumber: number]: TeamResult[] } = {};

    winner: Faction = null;

    currentMission: number;
    currentTeam: number;
}
