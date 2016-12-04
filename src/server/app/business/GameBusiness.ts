
import { GameRepository } from "./../repository/GameRepository";
import { IBaseBusiness } from "./interfaces/IBaseBusiness";
import { IGame } from "shared/models/IGame";
import { GameModel } from "../models/GameModel";

export class GameBusiness implements IBaseBusiness<IGame> {
    private _gameRepository: GameRepository;

    constructor() {
        this._gameRepository = new GameRepository();
    }

    create(item: IGame, callback: (error: any, result: any) => void) {
        this._gameRepository.create(<GameModel>item, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._gameRepository.retrieve(callback);
    }

    update(id: string, item: IGame, callback: (error: any, result: any) => void) {
        this._gameRepository.findById(id, (err, res) => {
            if (err)
                callback(err, res);
            else
                this._gameRepository.update(res._id, <GameModel>item, callback);
        });
    }

    delete(id: string, callback: (error: any, result: any) => void) {
        this._gameRepository.delete(id, callback);
    }

    findById(id: string, callback: (error: any, result: IGame) => void) {
        this._gameRepository.findById(id, callback);
    }
}

Object.seal(GameBusiness);