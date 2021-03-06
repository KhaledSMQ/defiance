
import { PlayerRepository } from "./../repository/PlayerRepository";
import { IBaseBusiness } from "./interfaces/IBaseBusiness";
import { IPlayer } from "shared/models";
import { PlayerModel } from "../models/PlayerModel";

export class PlayerBusiness implements IBaseBusiness<IPlayer> {
    private _playerRepository: PlayerRepository;

    constructor() {
        this._playerRepository = new PlayerRepository();
    }

    create(item: IPlayer, callback: (error: any, result: any) => void) {
        this._playerRepository.create(<PlayerModel>item, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._playerRepository.retrieve(callback);
    }

    update(id: string, item: IPlayer, callback: (error: any, result: any) => void) {
        this._playerRepository.findById(id, (err, res) => {
            if (err)
                callback(err, res);
            else
                this._playerRepository.update(res._id, <PlayerModel>item, callback);
        });
    }

    delete(id: string, callback: (error: any, result: any) => void) {
        this._playerRepository.delete(id, callback);
    }

    findById(id: string, callback: (error: any, result: IPlayer) => void) {
        this._playerRepository.findById(id, callback);
    }

    findByName(name: string, callback: (error: any, result: IPlayer) => void) {
        this._playerRepository.findOneByCriteria({ name: name }, callback);
    }
}

Object.seal(PlayerBusiness);