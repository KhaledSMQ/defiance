
import { GamePlayData } from "shared/models";

export class GamePlayDataCacheService {
    private static _cache: { [id: string]: GamePlayData } = {};

    get cache(): { [gameId: string]: GamePlayData } {
        return GamePlayDataCacheService._cache;
    }

    get(playerName: string): GamePlayData {
        let playerInfo: GamePlayData;
        if (!this.cache[playerName]) {

        }

        playerInfo = this.cache[playerName];
        return playerInfo;
    }

    set(playerName: string, model: GamePlayData): void {
        this.cache[playerName] = model;
    }
}