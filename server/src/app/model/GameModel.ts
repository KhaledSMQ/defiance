
import IGameModel = require('./interfaces/GameModel');

class GameModel {
    private _gameModel: IGameModel;

    constructor(gameModel: IGameModel) {
        this._gameModel = gameModel;
    }
    get name(): string {
        return this._gameModel.name;
    }

    get numberOfPlayers(): number {
        return this._gameModel.numberOfPlayers;
    }

    get roles(): string[] {
        return this._gameModel.roles;
    }

    get players(): string[] {
        return this._gameModel.players;
    }
}

Object.seal(GameModel);
export = GameModel;
