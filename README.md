# echo-hub

EchoHub is a simple messaging application that allows clients to exchange messages with a server. It demonstrates basic client-server communication using Node.js and TCP sockets.

## Features

- Send messages from the client to the server.
- Server processes received messages and sends back appropriate responses.
- Messages are logged in real-time to a log file.

## Prerequisites

- Node.js installed on your system.

## Usage

1. Start the server: `npm run start-server`
2. Start a client: `npm run start-client`
3. Enter messages in the client terminal. The server will respond with appropriate messages.

## Configuration

- Server host: `127.0.0.1`
- Server port: `12345`

## File Structure

- `src/client/client.js`: Client-side application code.
- `src/client/clientUtils.js`: Utility functions for the client.
- `src/server/server.js`: Server-side application code.
- `src/server/dataProcessor.js`: Functions to process data on the server.
- `src/server/commandReader.js`: Functions to read commands from a JSON file.
- `src/server/serverUtils.js`: Utility functions for the server.
- `data/Commands.json`: JSON file containing available commands and their responses.
- `logs/LogFile.txt`: Log file where messages are stored.

## Usage Examples

### Sending a Message

1. Start the client: `npm run start-client`
2. Enter a message in the client terminal, for example, `Hello55 World123`
3. The server will process the message and respond with: `Server answer: HeLlO55_wOrLd123`

### Sending a Command

1. Start the client: `npm run start-client`
2. Enter a valid command, for example, `command1`
3. The server will execute the command and respond with: `Server answer: This is command 1`

### Sending a Number

1. Start the client: `npm run start-client`
2. Enter a number, for example, `5`
3. The server will process the number and respond with: `Server answer: 5000`

Feel free to explore various message formats, commands, and numbers to interact with the server.
"# echo-hub" 
