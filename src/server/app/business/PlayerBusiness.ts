
import { PlayerRepository } from "./../repository/PlayerRepository";
import { IBaseBusiness } from "./interfaces/IBaseBusiness";
import { PlayerModel } from "../models/PlayerModel";

export class PlayerBusiness implements IBaseBusiness<PlayerModel> {
    private _playerRepository: PlayerRepository;

    constructor() {
        this._playerRepository = new PlayerRepository();
    }

    create(item: PlayerModel, callback: (error: any, result: any) => void) {
        this._playerRepository.create(item, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._playerRepository.retrieve(callback);
    }

    update(_id: string, item: PlayerModel, callback: (error: any, result: any) => void) {
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

    findById(_id: string, callback: (error: any, result: PlayerModel) => void) {
        this._playerRepository.findById(_id, callback);
    }

    findByName(name: string, callback: (error: any, result: PlayerModel) => void) {
        this._playerRepository.findOneByCriteria({ name: name }, callback);
    }
}

Object.seal(PlayerBusiness);