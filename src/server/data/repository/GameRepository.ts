
import { GameModel } from "../models/GameModel";
import { GameSchema } from "../schemas/GameSchema";
import { RepositoryBase } from "./BaseRepository";

export class GameRepository extends RepositoryBase<GameModel> {
    constructor() {
        super(GameSchema.mongooseSchema);
    }
}

Object.seal(GameRepository);