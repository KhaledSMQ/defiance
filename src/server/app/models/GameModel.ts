
import * as mongoose from "mongoose";
import { IGame } from "shared/models/IGame";

export interface GameModel extends IGame, mongoose.Document {

}
