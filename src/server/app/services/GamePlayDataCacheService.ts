
import { GamePlayData } from "shared/models";

export class GamePlayDataCacheService {
    private static _cache: { [id: string]: GamePlayData } = {};

    get cache(): { [id: string]: GamePlayData } {
        return GamePlayDataCacheService._cache;
    }

    get(id: string): GamePlayData {
        let gamePlayData: GamePlayData;
        gamePlayData = this.cache[id];
        return gamePlayData;
    }

    set(id: string, model: GamePlayData): void {
        this.cache[id] = model;
    }
}