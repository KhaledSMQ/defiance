
import * as mongoose from "mongoose";
import { IGame } from "shared/models";

export interface GameModel extends IGame, mongoose.Document {

}
