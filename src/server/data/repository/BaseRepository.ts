
import { IRead } from "./interfaces/IRead";
import { IWrite } from "./interfaces/IWrite";

import * as  mongoose from "mongoose";

export class RepositoryBase<T extends mongoose.Document> implements IRead<T>, IWrite<T> {

    private _model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    create(item: T, callback: (error: any, result: any) => void) {
        this._model.create(item, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._model.find({}, callback)
    }

    update(id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
        this._model.update({ _id: id }, item, callback);
    }

    delete(id: string, callback: (error: any, result: any) => void) {
        this._model.remove({ _id: this.toObjectId(id) }, (err) => callback(err, null));
    }

    findById(id: string, callback: (error: any, result: T) => void) {
        this._model.findById(id, callback);
    }

    findByCriteria(criteria: any, callback: (error: any, result: T[]) => void): void {
        this._model.find(criteria, callback);
    }

    findOneByCriteria(criteria: any, callback: (error: any, result: T) => void): void {
        this._model.findOne(criteria, callback);
    }

    private toObjectId(id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(id)
    }
}