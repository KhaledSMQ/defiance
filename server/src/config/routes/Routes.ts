
import express = require('express');
import path = require('path');

import GameRoutes = require('./GameRoutes');

var app = express();

class Routes {
    get routes() {
        app.use("/", new GameRoutes().routes);
        
        return app;
    }
}

export = Routes;
