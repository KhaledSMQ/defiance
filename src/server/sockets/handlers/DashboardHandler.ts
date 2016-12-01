
import GameManagementWorkflow = require("../../workflows/GameManagementWorkflow");
import ISocketHandler = require("../interfaces/SocketHandler");

class DashboardHandler implements ISocketHandler {
    io: SocketIO.Server;
    socket: SocketIO.Socket;

    onRegister(io: SocketIO.Server, socket: SocketIO.Socket) {
        this.socket = socket;

        this.socket.join("dashboardLobby")
            .on("joinGame", (data) => this.joinGame(data));
    }

    joinGame(data: any) {
        this.socket.join(`gameLobby#${data.game}`);
    }
}

export = DashboardHandler;