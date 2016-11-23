
import GameRepository = require("./../repository/GameRepository");
import IBaseBusiness = require("./interfaces/BaseBusiness");
import IGameModel = require("./../model/interfaces/GameModel");

class GameBusiness implements IBaseBusiness<IGameModel> {
    private _gameRepository: GameRepository;

    constructor() {
        this._gameRepository = new GameRepository();
    }

    create(item: IGameModel, callback: (error: any, result: any) => void) {
        this._gameRepository.create(item, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._gameRepository.retrieve(callback);
    }

    update(_id: string, item: IGameModel, callback: (error: any, result: any) => void) {
        this._gameRepository.findById(_id, (err, res) => {
            if (err)
                callback(err, res);
            else
                this._gameRepository.update(res._id, item, callback);
        });
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._gameRepository.delete(_id, callback);
    }

    findById(_id: string, callback: (error: any, result: IGameModel) => void) {
        this._gameRepository.findById(_id, callback);
    }
}

Object.seal(GameBusiness);
export = GameBusiness;
