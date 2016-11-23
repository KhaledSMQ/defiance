
import IGameModel = require("./../model/interfaces/GameModel");
import GameSchema = require("./../dataAccess/schemas/GameSchema");
import RepositoryBase = require("./BaseRepository");

class GameRepository  extends RepositoryBase<IGameModel> {
    constructor () {
        super(GameSchema);
    }
}

Object.seal(GameRepository);
export = GameRepository;
