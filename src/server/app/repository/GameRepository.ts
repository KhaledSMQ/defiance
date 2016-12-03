
import { Game } from "shared/models/game";
import { ObjectWrapper } from "../schemas/ObjectWrapper";
import { GameSchema } from "../schemas/GameSchema";
import { RepositoryBase } from "./BaseRepository";

export class GameRepository extends RepositoryBase<ObjectWrapper<Game>> {
    constructor() {
        super(GameSchema.mongooseSchema);
    }
}

Object.seal(GameRepository);