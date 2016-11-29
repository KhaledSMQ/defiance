
import GameManagementWorkflow = require("../../workflows/GameManagementWorkflow");
import ISocketHandler = require("../interfaces/SocketHandler");

class DashboardHandler implements ISocketHandler {
    io: SocketIO.Server;
    roomSocket: SocketIO.Socket;

    onRegister(io: SocketIO.Server, socket: SocketIO.Socket) {
        this.io = io;
        this.roomSocket = socket.join("dashboardLobby");

        this.roomSocket.on("requestJoinGame", (data) => this.joinGame(data));
    }

    joinGame(data: any) {
        let workflow: GameManagementWorkflow = new GameManagementWorkflow();

        workflow.joinGame(data.id, data.player,
            (result) => {
                this.roomSocket.emit("gameJoined", result);
            },
            (error) => {
                this.roomSocket.emit("gameJoined", error);
            })
    }
}

export = DashboardHandler;