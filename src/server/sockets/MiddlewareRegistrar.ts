
import { ISocketMiddleware } from "./interfaces/ISocketMiddleware";
import { AuthenticationChecker } from "./middleware/AuthenticationChecker";

export class MiddlewareRegistrar {
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