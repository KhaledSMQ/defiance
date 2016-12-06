
import * as mongoose from "mongoose";
import { DataAccess } from "../DataAccess/DataAccess";
import { PlayerModel } from "../models/PlayerModel";

export class PlayerSchema {
    private static mongooseModel: mongoose.Model<PlayerModel>;

    static get objectSchema() {
        var schema = DataAccess.mongooseInstance.Schema({
            name: {
                type: String,
                required: true
            }
        });

        return schema;
    }

    static get mongooseSchema(): mongoose.Model<PlayerModel> {
        if (!PlayerSchema.mongooseModel)
            PlayerSchema.mongooseModel = DataAccess.mongooseConnection.model<PlayerModel>("Players", PlayerSchema.objectSchema);
        return PlayerSchema.mongooseModel;
    }
}

var schema = PlayerSchema.objectSchema;