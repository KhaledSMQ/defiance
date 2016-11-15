
import DataAccess = require('../DataAccess');
import IGameModel = require("./../../model/interfaces/GameModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class GameSchema {
    static get schema() {
        var schema = mongoose.Schema({
            name: {
                type: String,
                required: true
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IGameModel>("Games", GameSchema.schema);
export = schema;
