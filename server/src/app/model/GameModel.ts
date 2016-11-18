
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

    get createdBy(): string {
        return this._gameModel.createdBy;
    }

    get roles(): string[] {
        return this._gameModel.roles;
    }

    get players(): string[] {
        return this._gameModel.players;
    }

    set players(players: string[]) {
        this._gameModel.players = players;
    }
}

Object.seal(GameModel);
export = GameModel;
