
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
            },
            numberOfPlayers: {
                type: Number,
                required: true
            },
            roles: {
                type: Array,
                required: true
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IGameModel>("Games", GameSchema.schema);
export = schema;
