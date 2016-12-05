
import { GamePlayData } from "shared/models";

export class GamePlayDataCacheService {
    private static _cache: { [id: string]: GamePlayData } = {};

    get cache(): { [id: string]: GamePlayData } {
        return GamePlayDataCacheService._cache;
    }

    get(playerName: string): GamePlayData {
        let playerInfo: GamePlayData;
        if (!this.cache[playerName]) {

        }

        playerInfo = this.cache[playerName];
        return playerInfo;
    }

    set(id: string, model: GamePlayData): void {
        this.cache[id] = model;
    }
}