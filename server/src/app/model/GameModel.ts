
import IGameModel = require('./interfaces/GameModel');

class GameModel {
    private _gameModel: IGameModel;

    constructor(gameModel: IGameModel) {
        this._gameModel = gameModel;
    }
    get name(): string {
        return this._gameModel.name;
    }
}

Object.seal(GameModel);
export = GameModel;
