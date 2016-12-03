
import { ISocketMiddleware } from "../interfaces/ISocketMiddleware";

export class AuthenticationChecker implements ISocketMiddleware {
    process(socket: SocketIO.Socket, next: (err?: any) => void): void {
        return next();
    }
}