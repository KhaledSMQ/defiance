
import * as mongoose from "mongoose";
import { DataAccess } from "../DataAccess/DataAccess";
import { GameModel } from "../models/GameModel";

export class GameSchema {
    private static mongooseModel: mongoose.Model<GameModel>;

    static get objectSchema() {
        var schema = DataAccess.mongooseInstance.Schema({
            name: {
                type: String,
                required: true
            },
            createdBy: {
                type: String,
                required: true
            },
            numberOfPlayers: {
                type: Number,
                required: true
            },
            status: {
                type: String
            },
            roles: {
                type: Array
            },
            items: {
                type: Array
            },
            options: {
                type: Object
            },
            players: {
                type: Array
            }
        });

        return schema;
    }

    static get mongooseSchema(): mongoose.Model<GameModel> {
        if (!GameSchema.mongooseModel)
            GameSchema.mongooseModel = DataAccess.mongooseConnection.model<GameModel>("Games", GameSchema.objectSchema);
        return GameSchema.mongooseModel;
    }
}

var schema = GameSchema.objectSchema;