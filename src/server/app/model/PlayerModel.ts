
import IPlayerModel = require('./interfaces/PlayerModel');

class PlayerModel {
    private _playerModel: IPlayerModel;

    constructor(playerModel: IPlayerModel) {
        this._playerModel = playerModel;
    }

    get name(): string {
        return this._playerModel.name;
    }
}

Object.seal(PlayerModel);
export = PlayerModel;
