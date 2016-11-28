
import PlayerRepository = require("./../repository/PlayerRepository");
import IBaseBusiness = require("./interfaces/BaseBusiness");
import IPlayerModel = require("./../model/interfaces/PlayerModel");

class PlayerBusiness implements IBaseBusiness<IPlayerModel> {
    private _playerRepository: PlayerRepository;

    constructor() {
        this._playerRepository = new PlayerRepository();
    }

    create(item: IPlayerModel, callback: (error: any, result: any) => void) {
        this._playerRepository.create(item, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._playerRepository.retrieve(callback);
    }

    update(_id: string, item: IPlayerModel, callback: (error: any, result: any) => void) {
        this._playerRepository.findById(_id, (err, res) => {
            if (err)
                callback(err, res);
            else
                this._playerRepository.update(res._id, item, callback);
        });
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._playerRepository.delete(_id, callback);
    }

    findById(_id: string, callback: (error: any, result: IPlayerModel) => void) {
        this._playerRepository.findById(_id, callback);
    }

    findByName(name: string, callback: (error: any, result: IPlayerModel) => void) {
        this._playerRepository.findOneByCriteria({ name: name }, callback);
    }
}

Object.seal(PlayerBusiness);
export = PlayerBusiness;
