
import express = require('express');
import path = require('path');

import GameRoutes = require('./GameRoutes');
import PlayerRoutes = require('./PlayerRoutes');

var app = express();

class Routes {
    get routes() {
        app.use("/", new GameRoutes().routes);
        app.use("/", new PlayerRoutes().routes);

        return app;
    }
}

export = Routes;