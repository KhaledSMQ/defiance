
import * as mongoose from "mongoose";
import { ObjectWrapper } from "./ObjectWrapper";
import { DataAccess } from "../DataAccess/DataAccess";
import { Player } from "shared/models/player";

export class PlayerSchema {
    private static mongooseModel: mongoose.Model<ObjectWrapper<Player>>;

    static get objectSchema() {
        var schema = DataAccess.mongooseInstance.Schema({
            name: {
                type: String,
                required: true
            }
        });

        return schema;
    }

    static get mongooseSchema(): mongoose.Model<ObjectWrapper<Player>> {
        if (!PlayerSchema.mongooseModel)
            PlayerSchema.mongooseModel = DataAccess.mongooseConnection.model<ObjectWrapper<Player>>("Players", PlayerSchema.objectSchema);
        return PlayerSchema.mongooseModel;
    }
}