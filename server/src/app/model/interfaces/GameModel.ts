
import mongoose = require("mongoose");

interface GameModel extends mongoose.Document {
    name: string;
}

export = GameModel;
