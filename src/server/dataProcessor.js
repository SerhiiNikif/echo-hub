/**
 * Processes a number received from the client and sends back the multiplied result.
 * @param {net.Socket} client - The client socket.
 * @param {string} data - Received data from the client.
 */
function processNumber(client, data) {
  const multipliedNumber = parseInt(data) * 1000;
  const response = `Server answer: ${multipliedNumber}`;
  client.write(response);
}

/**
 * Processes a command received from the client and sends back the corresponding response.
 * @param {net.Socket} client - The client socket.
 * @param {string} data - Received data from the client.
 * @param {Object} commands - Object containing available commands and their responses.
 */
function processCommand(client, data, commands) {
  const commandResponse = commands[data.toLowerCase()];
  const response = `Server answer: ${commandResponse}`;
  client.write(response);
}

/**
 * Processes text received from the client, formats it, and sends it back.
 * @param {net.Socket} client - The client socket.
 * @param {string} data - Received data from the client.
 */
function processText(client, data) {
  const words = data.split("");
  let flag = false;

  const result = words.map(char => {
    if (char === " ") {
      return "_";
    } 

    flag = !flag;
    return flag ? char.toUpperCase() : char.toLowerCase();
  }).join("");

  const response = `Server answer: ${result}`;
  client.write(response);
}

/**
 * Processes received data from the client based on its type (number, command, or text).
 * @param {net.Socket} client - The client socket.
 * @param {string} data - Received data from the client.
 * @param {Object} commands - Object containing available commands and their responses.
 */
function processData(client, data, commands) {
  if (!client.writable) {
    console.log('Client is not writable');
    return;
  }

  if (!isNaN(data)) {
    processNumber(client, data);
  } else if (commands && commands[data.toLowerCase()]) {
    processCommand(client, data, commands);
  } else {
    processText(client, data);
  }
}

module.exports = { processData }