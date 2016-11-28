
import mongoose = require("mongoose");

interface GameModel extends mongoose.Document {
    name: string;

    numberOfPlayers: number;

    createdBy: string,

    roles: string[];

    items: string[];

    players: string[];
}

export = GameModel;
