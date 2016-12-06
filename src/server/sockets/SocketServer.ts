
import { HandlerRegistrar } from "./HandlerRegistrar";
import { MiddlewareRegistrar } from "./MiddlewareRegistrar";

export class SocketServer {
    static io: SocketIO.Server;

    static broadcast<T>(id: string, data: T, channel?: string) {
        let io: SocketIO.Server = SocketServer.io;

        if (channel) {
            io.to(channel).emit(id, data);
        } else {
            io.emit(id, data);
        }
    }

    static start(io: SocketIO.Server) {
        SocketServer.io = io;

        let middlewareRegistrator = new MiddlewareRegistrar();
        console.log("Registering middlewares...");
        for (let middleware of middlewareRegistrator.Middlewares) {
            io.use(middleware.process.bind(middleware));
        }

        console.log("Registering IO on 'connection'...");
        io.on('connection', (socket: SocketIO.Socket) => {
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