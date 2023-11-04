const net = require('net');

const { processData } = require('./dataProcessor');
const { readCommandsFromFile } = require('./commandReader');
const { sendPeriodicMessage } = require('./serverUtils');

const PORT = 12345;
const HOST = '127.0.0.1';

const commands = readCommandsFromFile();

if (commands) {
  const server = net.createServer((client) => {
    let counter = 0;

    client.on('data', (data) => {
      const receivedData = data.toString().trim();
      processData(client, receivedData, commands);
    });

    client.on('end', () => {
      console.log('Client disconnected');
    });

    sendPeriodicMessage(client, counter);
  });

  server.listen(PORT, HOST, () => {
    console.log('Server listening on port', PORT);
  });
}
