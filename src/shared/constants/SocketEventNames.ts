

export class SocketEventNames {

    private static _client: { [name: string]: string } = {
        sendDataToServer: "dataToServer"
    }

    private static _server: { [name: string]: string } = {
        sendDataToClient: "dataToClient"
    }

    static get client(): { [name: string]: string } {
        return SocketEventNames._client;
    }

    static get server(): { [name: string]: string } {
        return SocketEventNames._server;
    }
}