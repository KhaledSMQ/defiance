
import DataAccess = require('../DataAccess');
import IPlayerModel = require("./../../model/interfaces/PlayerModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class PlayerSchema {
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
var schema = mongooseConnection.model<IPlayerModel>("Players", PlayerSchema.schema);
export = schema;
