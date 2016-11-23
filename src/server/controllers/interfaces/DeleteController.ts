
import express = require("express");

interface DeleteController {
    delete: express.RequestHandler;
}

export = DeleteController;
