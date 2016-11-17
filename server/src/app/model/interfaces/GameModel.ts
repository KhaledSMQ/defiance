
import mongoose = require("mongoose");

interface GameModel extends mongoose.Document {
    name: string;

    numberOfPlayers: number;

    roles: string[];

    players: string[];
}

export = GameModel;
