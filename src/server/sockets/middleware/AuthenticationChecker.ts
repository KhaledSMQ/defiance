
import ISocketMiddleware = require("../interfaces/SocketMiddleware");

class AuthenticationChecker implements ISocketMiddleware {
    process(socket: SocketIO.Socket, next: (err?: any) => void): void {
        return next();
    }
}

export = AuthenticationChecker;