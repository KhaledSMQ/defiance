
import ISocketMiddleware = require("./interfaces/SocketMiddleware");
import AuthenticationChecker = require("./middleware/AuthenticationChecker");

class MiddlewareRegistrar {
    authenticationChecker: AuthenticationChecker;

    constructor() {
        this.authenticationChecker = new AuthenticationChecker();
    }

    get Middlewares(): ISocketMiddleware[] {
        return [
            this.authenticationChecker
        ];
    }

}

Object.seal(MiddlewareRegistrar);
export = MiddlewareRegistrar;