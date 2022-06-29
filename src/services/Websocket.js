import {w3cwebsocket as WSocket} from 'websocket';

export default new class Websocket {
  // eslint-disable-next-line
  constructor() {
    this.isConnected = false;
    this.webSocket = null;
  }
  // eslint-disable-next-line
  connect() {
    if (this.isConnected) return;
    const socket = new WSocket('ws://localhost:8080');
    this.isConnected = true;
    this.webSocket = socket;
    return socket;
  }
  // eslint-disable-next-line
  use(socket) {
    if (this.isConnected) return;
    this.isConnected = true;
    this.webSocket = socket;
    return socket;
  }
  // eslint-disable-next-line
  sendAction(action, value) {
    if (!this.isConnected) return;
    this.webSocket.send(`{"action":"${action}","value":"${value}"}`);
  }
}();
