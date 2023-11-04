/**
 * Sends periodic messages to the client at a specified interval.
 *
 * @param {net.Socket} client - The client socket to send messages to.
 * @param {number} counter - The counter used in the message.
 */
function sendPeriodicMessage(client, counter) {
  if (client.writable) {
    const currentDate = new Date().toLocaleString();
    const message = `Counter: ${counter}, Time: ${currentDate}`;
    client.write(message);
    counter++;
    setTimeout(() => {
      sendPeriodicMessage(client, counter);
    }, 10000);
  } else {
    console.log('Client is not writable');
  }
}

module.exports = { sendPeriodicMessage }