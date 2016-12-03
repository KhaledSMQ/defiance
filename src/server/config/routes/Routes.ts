
import * as express from "express";
import * as path from "path";

import { GameRoutes } from "./GameRoutes";
import { PlayerRoutes } from "./PlayerRoutes";

export class Routes {
    private app: express.Express;

    constructor() {
        this.app = express();
    }
    get routes() {
        this.app.use("/", new GameRoutes().routes);
        this.app.use("/", new PlayerRoutes().routes);

        return this.app;
    }
}