
import { GameRepository } from "./../repository/GameRepository";
import { IBaseBusiness } from "./interfaces/IBaseBusiness";
import { GameModel } from "../models/GameModel";

export class GameBusiness implements IBaseBusiness<GameModel> {
    private _gameRepository: GameRepository;

    constructor() {
        this._gameRepository = new GameRepository();
    }

    create(item: GameModel, callback: (error: any, result: any) => void) {
        this._gameRepository.create(item, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._gameRepository.retrieve(callback);
    }

    update(_id: string, item: GameModel, callback: (error: any, result: any) => void) {
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

    findById(_id: string, callback: (error: any, result: GameModel) => void) {
        this._gameRepository.findById(_id, callback);
    }
}

Object.seal(GameBusiness);