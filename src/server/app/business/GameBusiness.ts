
import { GameRepository } from "./../repository/GameRepository";
import { IBaseBusiness } from "./interfaces/IBaseBusiness";
import { ObjectWrapper } from "../schemas/ObjectWrapper";
import { Game } from "shared/models/game";

export class GameBusiness implements IBaseBusiness<ObjectWrapper<Game>> {
    private _gameRepository: GameRepository;

    constructor() {
        this._gameRepository = new GameRepository();
    }

    create(item: ObjectWrapper<Game>, callback: (error: any, result: any) => void) {
        this._gameRepository.create(item, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._gameRepository.retrieve(callback);
    }

    update(_id: string, item: ObjectWrapper<Game>, callback: (error: any, result: any) => void) {
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

    findById(_id: string, callback: (error: any, result: ObjectWrapper<Game>) => void) {
        this._gameRepository.findById(_id, callback);
    }
}

Object.seal(GameBusiness);