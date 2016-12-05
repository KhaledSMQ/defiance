
import * as mongoose from "mongoose";
import { IPlayer } from "shared/models";

export interface PlayerModel extends IPlayer, mongoose.Document {

}
