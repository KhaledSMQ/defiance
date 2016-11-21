
import ISocketMiddleware = require("../interfaces/SocketMiddleware");

class AuthenticationChecker implements ISocketMiddleware {
    process(socket: any, next: (err?: any) => void): void {
        return next();
    }
}

export = AuthenticationChecker;