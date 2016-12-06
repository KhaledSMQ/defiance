
import { ISocketHandler } from "../interfaces/ISocketHandler";

export class DashboardHandler implements ISocketHandler {
    onRegister(io: SocketIO.Server, socket: SocketIO.Socket) {
        socket.join("dashboardLobby");
    }
}