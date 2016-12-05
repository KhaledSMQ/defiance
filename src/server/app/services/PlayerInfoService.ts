
import { PlayerInfo } from "shared/models";

export class PlayerInfoService {

    private static playerInfoCache: { [gameId: string]: PlayerInfo } = {};

    get playerInfoCache(): { [gameId: string]: PlayerInfo } {
        return PlayerInfoService.playerInfoCache;
    }

    getPlayerInfo(playerName: string): PlayerInfo {
        let playerInfo: PlayerInfo;
        if (!this.playerInfoCache[playerName]) {
            this.setPlayerInfo(playerName, { ready: false });
        }

        playerInfo = this.playerInfoCache[playerName];
        return playerInfo;
    }

    setPlayerInfo(playerName: string, model: PlayerInfo): void {
        this.playerInfoCache[playerName] = model;
    }
}