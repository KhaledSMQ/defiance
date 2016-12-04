
import * as mongoose from "mongoose";
import { IPlayer } from "shared/models/IPlayer";

export interface PlayerModel extends IPlayer, mongoose.Document {

}
