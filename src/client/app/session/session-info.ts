
import { Player } from "../models/player";


export class SessionInfo {

    private static gameActive: boolean = false;

    static Player: Player;

    static CurrentActiveGame: string;

    static get GameActive(): boolean {
        return SessionInfo.gameActive;
    }

    static set GameActive(value: boolean) {
        SessionInfo.gameActive = value;
    }
}