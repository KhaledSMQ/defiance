
import { PlayerInfo } from "shared/models";

export class PlayerInfoCacheService {
    private static _cache: { [id: string]: PlayerInfo } = {};

    get cache(): { [gameId: string]: PlayerInfo } {
        return PlayerInfoCacheService._cache;
    }

    get(playerName: string): PlayerInfo {
        let playerInfo: PlayerInfo;
        if (!this.cache[playerName]) {
            this.set(playerName, { ready: false });
        }

        playerInfo = this.cache[playerName];
        return playerInfo;
    }

    set(playerName: string, model: PlayerInfo): void {
        this.cache[playerName] = model;
    }
}