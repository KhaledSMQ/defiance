
import mongoose = require("mongoose");

interface PlayerModel extends mongoose.Document {
    name: string;
}

export = PlayerModel;
