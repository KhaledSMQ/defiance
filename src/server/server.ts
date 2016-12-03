/// <reference path="./typings/index.d.ts" />

import * as express from 'express';
import * as bodyParser from "body-parser";
import * as path from 'path';
import { Routes } from "./config/routes/Routes";

export class ExpressServer {
    app: express.Express;
    private port: number = process.env.PORT || 3000;
    private env: string = process.env.NODE_ENV || 'development';

    constructor() {
        this.app = express();
        this.app.set('port', this.port);

        this.app.use('/app', express.static(path.resolve(__dirname, '../client/app')));
        this.app.use('/libs', express.static(path.resolve(__dirname, '../client/libs')));

        // for registering https
        this.app.use('/.well-known', express.static(path.resolve(__dirname, '../../.well-known')));

        // for system.js to work. Can be removed if bundling.
        this.app.use(express.static(path.resolve(__dirname, '../client')));
        this.app.use('/shared', express.static(path.resolve(__dirname, '../shared')));
        this.app.use(express.static(path.resolve(__dirname, '../../node_modules')));

        this.app.use(bodyParser.json());
        this.app.use('/api', new Routes().routes);

        var renderIndex = (req: express.Request, res: express.Response) => {
            res.sendFile(path.resolve(__dirname, '../client/index.html'));
        }

        this.app.get('/*', renderIndex);

        if (this.env === 'development') {
            this.app.use(function (err, req: express.Request, res: express.Response, next: express.NextFunction) {
                res.status(err.status || 500);
                res.json({
                    error: err,
                    message: err.message
                });
            });
        }

        // catch 404 and forward to error handler
        this.app.use(function (req: express.Request, res: express.Response, next) {
            let err = new Error("Not Found");
            next(err);
        });

        // production error handler
        // no stacktrace leaked to user
        this.app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            res.status(err.status || 500);
            res.json({
                error: {},
                message: err.message
            });
        });
    }
}