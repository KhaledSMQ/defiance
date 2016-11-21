
import HandlerRegistrar = require("./HandlerRegistrar");
import MiddlewareRegistrar = require("./MiddlewareRegistrar");

class SocketServer {
    static io: any;

    static broadcast<T>(id: string, data: T, channel?: string) {
        let io: any = SocketServer.io;

        if (channel) {
            io.to(channel).emit(id, data);
        } else {
            io.emit(id, data);
        }
    }

    static start(io: any) {
        SocketServer.io = io;

        let middlewareRegistrator = new MiddlewareRegistrar();
        console.log("Registering middlewares...");
        for (let middleware of middlewareRegistrator.Middlewares) {
            io.use(middleware.process.bind(middleware));
        }

        console.log("Registering IO on 'connection'...");
        io.on('connection', (socket) => {
            console.log('user connected');

            socket.on('disconnect', function () {
                console.log('user disconnected');
            });

            var registrar = new HandlerRegistrar();
            console.log("Registering Socket Handlers...");
            for (let handler of registrar.Handlers) {
                handler.onRegister(io, socket);
            }
        });

    }
}

export = SocketServer;