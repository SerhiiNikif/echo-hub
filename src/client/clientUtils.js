const fs = require('fs');
const LogFile = './logs/LogFile.txt';

/**
 * Asynchronously logs the provided data to the LogFile.txt.
 *
 * @param {string} data - The data to be logged to the file.
 * @returns {Promise<void>} A Promise that resolves when the data is successfully logged, or rejects with an error.
 */
async function logToFile(data) {
  let fileHandle = null;
  try {
    // Open the LogFile in append mode and write the provided data followed by a newline.
    fileHandle = await fs.promises.open(LogFile, 'a');
    await fileHandle.appendFile(`${data}\n`);
  } catch (err) {
    console.error('Error logging data to LogFile.txt:', err);
  } finally {
    // Close the file handle to release the associated resources, if it was successfully opened.
    if (fileHandle) {
      try {
        await fileHandle.close();
      } catch (err) {
        console.error('Error closing file handle:', err);
      }
    }
  }
}

/**
 * Handles data received from the server. Logs it and prints it to the console.
 *
 * @param {Buffer} data - Received data from the server.
 * @param {net.Socket} client - The client socket object.
 */
function handleDataFromServer(data, client) {
  const receivedData = data.toString().trim();
  console.log(receivedData);
  logToFile(receivedData);
}

/**
 * Handles user input. Sends it to the server, logs it, and prints it to the console.
 *
 * @param {string} command - User input received from the console.
 * @param {net.Socket} client - The client socket object.
 */
async function handleUserInput(command, client) {
  client.write(command);
  logToFile(command);
}

module.exports = { handleDataFromServer, handleUserInput };