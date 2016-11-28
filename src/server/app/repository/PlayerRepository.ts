
import IPlayerModel = require("./../model/interfaces/PlayerModel");
import PlayerSchema = require("./../dataAccess/schemas/PlayerSchema");
import RepositoryBase = require("./BaseRepository");

class PlayerRepository  extends RepositoryBase<IPlayerModel> {
    constructor () {
        super(PlayerSchema);
    }
}

Object.seal(PlayerRepository);
export = PlayerRepository;
