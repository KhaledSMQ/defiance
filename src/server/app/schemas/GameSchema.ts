
import * as mongoose from "mongoose";
import { DataAccess } from "../DataAccess/DataAccess";
import { ObjectWrapper } from "./ObjectWrapper";
import { Game } from "shared/models/game";

export class GameSchema {
    private static mongooseModel: mongoose.Model<ObjectWrapper<Game>>;

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

    static get mongooseSchema(): mongoose.Model<ObjectWrapper<Game>> {
        if (!GameSchema.mongooseModel)
            GameSchema.mongooseModel = DataAccess.mongooseConnection.model<ObjectWrapper<Game>>("Games", GameSchema.objectSchema);
        return GameSchema.mongooseModel;
    }
}
