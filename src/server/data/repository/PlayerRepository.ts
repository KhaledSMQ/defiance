
import { PlayerModel } from "../models/PlayerModel";
import { PlayerSchema } from "../schemas/PlayerSchema";
import { RepositoryBase } from "./BaseRepository";

export class PlayerRepository extends RepositoryBase<PlayerModel> {
    constructor() {
        super(PlayerSchema.mongooseSchema);
    }
}

Object.seal(PlayerRepository);