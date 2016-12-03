
import { Player } from "shared/models/player";
import { ObjectWrapper } from "../schemas/ObjectWrapper";
import { PlayerSchema } from "../schemas/PlayerSchema";
import { RepositoryBase } from "./BaseRepository";

export class PlayerRepository extends RepositoryBase<ObjectWrapper<Player>> {
    constructor() {
        super(PlayerSchema.mongooseSchema);
    }
}

Object.seal(PlayerRepository);