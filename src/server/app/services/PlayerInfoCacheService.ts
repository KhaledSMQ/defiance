
import { PlayerInfo } from "shared/models";

export class PlayerInfoCacheService {
    private static _cache: { [id: string]: PlayerInfo } = {};

    get cache(): { [id: string]: PlayerInfo } {
        return PlayerInfoCacheService._cache;
    }

    get(name: string): PlayerInfo {
        let playerInfo: PlayerInfo;
        if (!this.cache[name]) {
            this.set(name, { ready: false });
        }

        playerInfo = this.cache[name];
        return playerInfo;
    }

    set(name: string, model: PlayerInfo): void {
        this.cache[name] = model;
    }
}