const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 8080});

wss.on('connection', (ws) => {
  console.log('New client connected');
  ws.on('message', (data) => {
    const msg = JSON.parse(data.toString());
    if (msg.action == 'InputPitch' && msg.value == 1) {
      console.log('Player is looking up');
    }
    if (msg.action == 'InputPitch' && msg.value == -1) {
      console.log('Player is looking down');
    }
    if (msg.action == 'InputPitch' && msg.value == 0) {
      console.log('Player stop to move pitch');
    }
    if (msg.action == 'InputYaw' && msg.value == 1) {
      console.log('Player is looking right');
    }
    if (msg.action == 'InputYaw' && msg.value == -1) {
      console.log('Player is looking left');
    }
    if (msg.action == 'InputYaw' && msg.value == 0) {
      console.log('Player stop to move yaw');
    }
    if (msg.action == 'InputStart') {
      console.log('Player clicked Start');
    }
    if (msg.action == 'InputSelect') {
      console.log('Player clicked Select');
    }
    if (msg.action == 'InputA') {
      console.log('Player clicked A');
    }
    if (msg.action == 'InputB') {
      console.log('Player clicked B');
    }
  });
  ws.on('close', () => {
    console.log('the client has connected');
  });
  ws.onerror = function() {
    console.log('Some Error occurred');
  };
});
console.log('The WebSocket server is running on port 8080');
