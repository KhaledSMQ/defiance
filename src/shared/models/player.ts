
import { IPlayer } from "./IPlayer";
import { IIndexable } from "./IIndexable";

export class Player implements IPlayer, IIndexable {
    _id? : string | number;

    name: string;
}