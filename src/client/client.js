const net = require('net');
const { handleDataFromServer, handleUserInput } = require('./clientUtils');

const PORT = 12345;
const HOST = '127.0.0.1';

const client = new net.Socket();

client.connect(PORT, HOST, () => {
  console.log('Connected to server');
});

client.on('data', (data) => handleDataFromServer(data, client));

process.stdin.on('data', (data) => handleUserInput(data.toString().trim(), client));

client.on('error', (err) => {
  console.error('Client error:', err);
});

client.on('close', () => {
  console.log('Connection closed');
});