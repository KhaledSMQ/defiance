
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
            createdBy: {
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
            },
            items: {
                type: Array,
                required: true
            },
            options: {
                type: Object,
                required: true
            },
            players: {
                type: Array
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IGameModel>("Games", GameSchema.schema);
export = schema;
