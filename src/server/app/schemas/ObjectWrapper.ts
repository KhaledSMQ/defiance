

import * as mongoose from "mongoose";

export interface ObjectWrapper<T> extends mongoose.Document {
    _id: mongoose.Types.ObjectId;

    value: T;
}