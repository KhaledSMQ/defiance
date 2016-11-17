
import express = require("express");

interface WriteController {
    create: express.RequestHandler;
    update: express.RequestHandler;
}

export = WriteController;
