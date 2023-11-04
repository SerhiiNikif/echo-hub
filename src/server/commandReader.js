const fs = require('fs');
const CommandsFile = ('./data/Commands.json');

/**
 * Reads commands from the specified JSON file.
 * @returns {Object|null} Parsed JSON object containing commands, or null if there's an error.
 */
function readCommandsFromFile() {
  try {
    const commands = JSON.parse(fs.readFileSync(CommandsFile, 'utf8'));
    return commands;
  } catch (err) {
    console.error('Error reading CommandsFile:', err);
    throw err;
  }
}

module.exports = { readCommandsFromFile };